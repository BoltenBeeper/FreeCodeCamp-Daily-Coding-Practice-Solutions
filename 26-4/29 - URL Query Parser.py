def parse_url_query(url):
    queryData = {}
    # Remove everything before the "?" in the original url string. (Split at the "?" then keep only the second half.)
    params = url.split("?")[1]
    print(params)

    # Iterate through each query, separating keys and values by "=". Then both to an object.
    for i in params.split("&") :
        key, value = i.split("=")
        queryData[key] = value
    
    print(queryData)
    return queryData

parse_url_query("https://example.com/search?name=Alice&age=30")