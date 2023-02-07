const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {

	const users = await prisma.users.createMany({
		data: [
			{ name: '山田寝太郎', gender: '男', job: '学生' },
			{ name: '鈴木ひより', gender: '女', job: '学生' },
			{ name: '石垣高雄', gender: '男', job: '会社員' },
		],
	});

	console.log(users);

	const diaries = await prisma.diaries.createMany({
		data: [
			{ write_date: new Date('2021-02-25'), body: 'よく寝た', users_id: 1, weather: 'くもり' },
			{ write_date: new Date('2021-02-26'), body: '昼寝した', users_id: 1, weather: '晴れ' },
			{ write_date: new Date('2021-02-26'), body: '今日は晴れでした', users_id: 2, weather: '晴れ' },
			{ write_date: new Date('2021-02-26'), body: '成長を感じる', users_id: 3, weather: '晴れ' },
			{ write_date: new Date('2021-02-27'), body: '今日も成長した', users_id: 3, weather: '雨' },
			{ write_date: new Date('2021-02-27'), body: '雨が降りました', users_id: 2, weather: '雨' },
			{ write_date: new Date('2021-02-28'), body: '寝すぎた', users_id: 1, weather: 'くもり' },
			{ write_date: new Date('2021-02-28'), body: 'くもりでした', users_id: 2, weather: 'くもり' },
			{ write_date: new Date('2021-02-28'), body: '飛躍の１日だった', users_id: 3, weather: 'くもり' },
			{ write_date: new Date('2021-02-28'), body: '２月は寝てた', users_id: 1, weather: '晴れ' },
		],
	});

	console.log(diaries);

	const comments = await prisma.comments.createMany({
		data: [
			{ diaries_id: 2, comment: '寝すぎでは', users_id: 3 },
			{ diaries_id: 10, comment: '３月も寝よう' },
			{ diaries_id: 3, comment: '明日は天気悪いらしい', users_id: 1 },
			{ diaries_id: 6, comment: '雨の日は読書に限るぞ', users_id: 3 },
			{ diaries_id: 7, comment: '大丈夫ですか？' },
			{ diaries_id: 8, comment: '寒かったね' },
			{ diaries_id: 2, comment: '昼寝なので問題ない', users_id: 1 },
		],
	});

	console.log(comments);

}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
