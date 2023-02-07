# 概要
N予備校 【データベース3】テーブルの結合  
Prisma を使って同じテーブルを作成してみました。

## ER図
[![](https://mermaid.ink/img/pako:eNpdjjEOwyAUQ6-CPCcXYOiUG7Qjyxf8NEj5EMFnqKLcvVRplniy7CfLO3wODIt3oW0xr8kl0xUilcjVjOPD-CzCSevZtMrlzP_MPb5wDBAuQjH09f1HOejCwg6228AztVUdXDo6Sk3z85M8rJbGA9oWSHmK1H8J7Exr5eML0As5CA?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNpdjjEOwyAUQ6-CPCcXYOiUG7Qjyxf8NEj5EMFnqKLcvVRplniy7CfLO3wODIt3oW0xr8kl0xUilcjVjOPD-CzCSevZtMrlzP_MPb5wDBAuQjH09f1HOejCwg6228AztVUdXDo6Sk3z85M8rJbGA9oWSHmK1H8J7Exr5eML0As5CA)

## SQL
3つのテーブルを結合して表示するSQL
``` SQL
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
```
