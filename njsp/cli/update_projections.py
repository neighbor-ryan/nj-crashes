#!/usr/bin/env python
import click

from nj_crashes.utils.nb import execute
from njsp.cli.base import command


@command
@click.option('-k', '--kernel', default='python3')
def update_projections(kernel):
    nb_path = 'njsp/update-projections.ipynb'
    execute(nb_path, kernel=kernel)
    return "Update NJSP projections"
