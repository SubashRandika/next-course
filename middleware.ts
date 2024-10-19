export { default } from "next-auth/middleware";

/*
    This middleware will block access to certain routes
    from users without a valid session

    matcher possible patterns
    '*' - Zero or more
    '+' - One or more
    '?' - 0 or 1
*/
export const config = {
  matcher: ["/users/:id*"],
};
