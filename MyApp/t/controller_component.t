use strict;
use warnings;
use Test::More;


use Catalyst::Test 'MyApp';
use MyApp::Controller::component;

ok( request('/component')->is_success, 'Request should succeed' );
done_testing();
