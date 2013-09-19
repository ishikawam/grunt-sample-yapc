use strict;
use warnings;
use Test::More;


use Catalyst::Test 'GruntSample';
use GruntSample::Controller::bootswatch;

ok( request('/bootswatch')->is_success, 'Request should succeed' );
done_testing();
