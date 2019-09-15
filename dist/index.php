            
            
            <!DOCTYPE html><html lang=en><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content="IE=edge"><meta name=viewport content="width=device-width,initial-scale=1"><!--[if IE]><link rel="icon" href="./dist/favicon.ico"><![endif]--><title>php-vue-todo</title><link rel=stylesheet href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"><link rel=stylesheet href="https://fonts.googleapis.com/css?family=Material+Icons"><link href=./dist/css/chunk-08ba88df.21fbd315.css rel=prefetch><link href=./dist/css/chunk-22fe512c.08f5b3be.css rel=prefetch><link href=./dist/css/chunk-2cdfbd0b.d60536a9.css rel=prefetch><link href=./dist/css/chunk-4729b51d.b30cc6de.css rel=prefetch><link href=./dist/css/chunk-59aa86e3.f2b30ae7.css rel=prefetch><link href=./dist/css/chunk-6c6728da.582aafde.css rel=prefetch><link href=./dist/js/chunk-08ba88df.6dba9a31.js rel=prefetch><link href=./dist/js/chunk-22fe512c.84f783c5.js rel=prefetch><link href=./dist/js/chunk-2cdfbd0b.233545f9.js rel=prefetch><link href=./dist/js/chunk-2d0c8e41.64c869f9.js rel=prefetch><link href=./dist/js/chunk-4729b51d.cfae9720.js rel=prefetch><link href=./dist/js/chunk-59aa86e3.afdcb2d1.js rel=prefetch><link href=./dist/js/chunk-6c6728da.9e2302b7.js rel=prefetch><link href=./dist/js/http.3f380778.js rel=prefetch><link href=./dist/css/chunk-vendors.5f0a59ae.css rel=preload as=style><link href=./dist/js/app.a789b8d5.js rel=preload as=script><link href=./dist/js/chunk-vendors.87b88f2e.js rel=preload as=script><link href=./dist/css/chunk-vendors.5f0a59ae.css rel=stylesheet><link rel=icon type=image/png sizes=32x32 href=./dist/img/icons/favicon-32x32.png><link rel=icon type=image/png sizes=16x16 href=./dist/img/icons/favicon-16x16.png><link rel=manifest href=./dist/manifest.json><meta name=theme-color content=#4DBA87><meta name=apple-mobile-web-app-capable content=no><meta name=apple-mobile-web-app-status-bar-style content=default><meta name=apple-mobile-web-app-title content=phonebook-vue><link rel=apple-touch-icon href=./dist/img/icons/apple-touch-icon-152x152.png><link rel=mask-icon href=./dist/img/icons/safari-pinned-tab.svg color=#4DBA87><meta name=msapplication-TileImage content=./dist/img/icons/msapplication-icon-144x144.png><meta name=msapplication-TileColor content=#000000></head><body><noscript><strong>We're sorry but php-vue-todo doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript><div id=app></div><script>window.onload = function() {
            var props = {
                BACKEND_URL: 'http://todo.kostia7alania.ru/',
                IS_ADMIN: '',
                IS_LOGGED_IN: ''
            }
            initApp(props)
          
        }</script><script src=./dist/js/chunk-vendors.87b88f2e.js></script><script src=./dist/js/app.a789b8d5.js></script>

<div style="border='1px solid red;'">
   <?
    print_r(Session::get(Config::USER_COOKIE));
   ?>
</div>

        
        </body></html>