"""add long_description to exams

Revision ID: 9db37597f5a9
Revises: 
Create Date: 2018-05-20 23:53:05.810154

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9db37597f5a9'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('exams', sa.Column(
        'long_description',
        sa.Text,
        nullable=False,
        server_default='Default exam description'
    ))


def downgrade():
    pass
