use strict;
use warnings;
use Test::More;


use Catalyst::Test 'GruntSample';
use GruntSample::Controller::component;

ok( request('/component')->is_success, 'Request should succeed' );
done_testing();
