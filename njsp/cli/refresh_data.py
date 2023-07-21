from datetime import datetime

import click
from utz import process

from .base import command


def update_years(*years):
    for year in years:
        name = f"FAUQStats{year}.xml"
        process.run('wget', '-O', f'data/{name}', f'https://nj.gov/njsp/info/fatalacc/{name}')


@command
@click.argument('years', nargs=-1)
def refresh_data(years):
    if not years:
        year = datetime.now().year
        years = [ year - 2, year - 1, year ]
    update_years(*years)
    return 'Refresh NJSP data'
