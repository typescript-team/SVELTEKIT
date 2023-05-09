import { json } from '@sveltejs/kit';
import { comments } from '$lib/data/comments';

export function GET(RequestEvent) {
	const { params } = RequestEvent;
	const { commentId } = params;
	const comment = comments.find((comment) => comment.id === parseInt(commentId));

	return json(comment);
}

export async function PATCH(RequestEvent) {
	const { params, request } = RequestEvent;
	const { commentId } = params;
	const { text } = await request.json();

	const comment = comments.find((comment) => comment.id === parseInt(commentId));
	comment!.text = text; // ! 값이 있다고 강제 지정

	return json(comment);
}

export async function DELETE(RequestEvent) {
	const { params } = RequestEvent;
	const { commentId } = params;

	const deleteComment = comments.find((comment) => comment.id === parseInt(commentId));
	const index = comments.findIndex((comment) => comment.id === parseInt(commentId));

	comments.splice(index, 1);
	return json(deleteComment);
}
