def dispatch(self, request, *args, **kwargs):       
        ...
        ...    
        try:
            self.initial(request, *args, **kwargs)

            # Get the appropriate handler method
            if request.method.lower() in self.http_method_names:
                 # here handler is fetched for the request method
                 # `http_method_not_allowed` handler is assigned if no handler was found
                handler = getattr(self, request.method.lower(),
                                  self.http_method_not_allowed)
            else:
                handler = self.http_method_not_allowed 

            response = handler(request, *args, **kwargs) # handler is called here

        except Exception as exc:
            response = self.handle_exception(exc)

        self.response = self.finalize_response(request, response, *args, **kwargs)
        return self.response