#!/usr/bin/env python
import click

from njsp.cli.base import command
from njsp.nb import execute


@command
@click.option('-k', '--kernel', default='python3')
def update_plots(kernel):
    execute('njsp/update-plots.ipynb', kernel=kernel)
    return "Update NJSP plots"
