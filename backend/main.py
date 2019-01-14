import psycopg2


def hello_world(request):
    """
    Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    if request.method == 'OPTION':
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }
        return ('', 204, headers)
    conn = psycopg2.connect(host='/cloudsql/hackwa-membership:us-west1:myinstance', dbname='postgres', user='postgres',  password='password')
    cur = conn.cursor()
    path = request.path.strip("/")
    args = request.args.to_dict()
    headers = {
        'Access-Control-Allow-Origin': '*'
    }
    if request.method == 'POST':
        if path == 'account':
            if 'sid' in args and 'name' in args and 'year' in args and 'email' in args:
                try:
                    cur.execute(
                            "INSERT INTO Student (sid, name, email, year) " +
                            "VALUES (%s, %s, %s, %s);",
                            (args['sid'], args['name'], args['email'],
                                args['year']))
                    conn.commit()
                    cur.close()
                    conn.close()
                    return (str({'success': 1}), 200, headers)
                except Exception as e:
                    cur.close()
                    conn.close()
                    return (str({'success': psycopg2.errorcodes.lookup(e.pgcode)}), 500, headers)
        elif path == 'add_member':
            if 'sid' in args and 'oid' in args:
                try:
                    cur.execute("INSERT INTO Membership (sid, oid) VALUES (%s, %s);", (args['sid'], args['oid']))
                    conn.commit()
                    cur.close()
                    conn.close()
                    return (str({'success': 1}), 200, headers)
                except Exception as e:
                    cur.close()
                    conn.close()
                    return ({'success': psycopg2.errorcodes.lookup(e.pgcode)}, 500, headers)
    elif request.method == 'GET':
        if path == 'memberships':
            if 'sid' in args:
                try:
                    cur.execute("SELECT m.mid, o.name FROM membership m JOIN organization o ON m.oid = o.oid WHERE m.sid = %s;", (args['sid']))
                    col = ['mid', 'name']
                    results = []
                    for row in cur.fetchall():
                        results.append(dict(zip(col, row)))
                    cur.close()
                    conn.close()
                    return (str({'success': 1, 'result': results}), 200, headers)
                except Exception as e:
                    cur.close()
                    conn.close()
                    return (str({'success': psycopg2.errorcodes.lookup(e.pgcode)}), 500, headers)
        elif path == 'avail_mem':
            if 'sid' in args:
                try:
                    cur.execute("SELECT o.oid, o.name FROM organization o WHERE NOT EXISTS (SELECT FROM Membership WHERE sid = %s AND oid = o.oid);", (args['sid']))
                    col = ['oid', 'name']
                    results = []
                    for row in cur.fetchall():
                        results.append(dict(zip(col, row)))
                    cur.close()
                    conn.close()
                    return (str({'success': 1, 'result': results}), 200, headers)
                except Exception as e:
                    cur.close()
                    conn.close()
                    return (str({'success': psycopg2.errorcodes.lookup(e.pgcode)}), 500, headers)
        elif path == 'detail':
            if 'sid' in args:
                try:
                    col = ['name', 'email', 'year']
                    cur.execute("SELECT name, email, year FROM Student WHERE sid = %s;", (args['sid']));
                    result = dict(zip(col, cur.fetchall()[0]))
                    cur.close()
                    conn.close()
                    return (str({'success': 1, 'result': result}), 200, headers)
                except Exception as e:
                    cur.close()
                    conn.close()
                    return (str({'success': psycopg2.errorcodes.lookup(e.pgcode)}), 500, headers)
    cur.close()
    conn.close()
    return (str({'success': 0}), 500, headers)
