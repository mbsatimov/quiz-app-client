export const PAGES = {
	TEACHER_QUIZZES: '/t',
	TEACHER_QUIZ: (quizId: number) => `/t/${quizId}`,
	CREATE_QUIZ: '/t/create-quiz',
	EDIT_QUIZ: (quizId: number) => `/t/edit-quiz/${quizId}`,
	USERS: '/t/users',
	EDIT_USER: (userId: number) => `/t/edit-user/${userId}`,
	STUDENT_QUIZZES: '/s',
	STUDENT_QUIZ: (quizId: number) => `/s/${quizId}`,
}
