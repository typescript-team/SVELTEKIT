import { json } from '@sveltejs/kit';
import { comments } from '$lib/data/comments';

export function GET() {
	/*
	return new Response(JSON.stringify(comments), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
    */

	// http://[::1]:5173/api/comments

	return json(comments);
}

export async function POST(requestEvent) {
	const { request } = requestEvent;
	const { text } = await request.json(); // text 읽기
	const newComment = {
		id: comments.length + 1,
		text
	};
	comments.push(newComment);
	return json(newComment, { status: 201 });
}
