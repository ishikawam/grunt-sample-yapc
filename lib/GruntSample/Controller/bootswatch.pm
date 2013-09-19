package GruntSample::Controller::bootswatch;
use Moose;
use namespace::autoclean;

BEGIN { extends 'Catalyst::Controller'; }

=head1 NAME

GruntSample::Controller::bootswatch - Catalyst Controller

=head1 DESCRIPTION

Catalyst Controller.

=head1 METHODS

=cut


=head2 index

=cut

sub index :Path :Args(0) {
    my ( $self, $c ) = @_;

#    $c->response->body('Matched GruntSample::Controller::bootswatch in bootswatch.');
    $c->stash->{template} = 'bootswatch.tt';
}



=encoding utf8

=head1 AUTHOR

Masayuki Ishikawa

=head1 LICENSE

This library is free software. You can redistribute it and/or modify
it under the same terms as Perl itself.

=cut

__PACKAGE__->meta->make_immutable;

1;
