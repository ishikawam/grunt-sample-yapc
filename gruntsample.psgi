use strict;
use warnings;

use GruntSample;

my $app = GruntSample->apply_default_middlewares(GruntSample->psgi_app);
$app;

