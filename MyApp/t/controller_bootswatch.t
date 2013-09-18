use strict;
use warnings;
use Test::More;


use Catalyst::Test 'MyApp';
use MyApp::Controller::bootswatch;

ok( request('/bootswatch')->is_success, 'Request should succeed' );
done_testing();
