from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

class CustomHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_my_headers()
        SimpleHTTPRequestHandler.end_headers(self)

    def send_my_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")

if __name__ == "__main__":
    port = 80
    server_address = ('', port)
    httpd = ThreadingHTTPServer(server_address, CustomHandler)
    print(f"Serving at port {port}")
    httpd.serve_forever()
