"""empty message

Revision ID: 43035d6a3b9f
Revises: 3963b0e2b1bb
Create Date: 2024-10-09 00:28:36.030998

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
import sqlmodel

# revision identifiers, used by Alembic.
revision: str = '43035d6a3b9f'
down_revision: Union[str, None] = '3963b0e2b1bb'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('signupformmodel', schema=None) as batch_op:
        batch_op.drop_column('id')

    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('signupformmodel', schema=None) as batch_op:
        batch_op.add_column(sa.Column('id', sa.INTEGER(), nullable=False))

    # ### end Alembic commands ###