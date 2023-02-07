-- ３つのテーブルを結合したSQL

with du as ( select diaries.id as id, diaries.body as body, users.name as name from diaries inner join users on diaries.users_id = users.id)
select
    du.id,
    du.body,
    du.name,
    comments.comment_id,
    comments.comment,
    users.id,
    users.name
from
    du
    left outer join comments
        on du.id = comments.diaries_id
    left outer join users
        on comments.users_id = users.id
order by du.id
