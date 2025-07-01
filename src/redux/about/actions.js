import { COMMENT_DELETE, COMMNET_CREATE, DECREMENT, INCREMENT, INPUT_TEXT } from "./types";

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text
    }
}

export function incrementLikes() {
    return {
        type: INCREMENT
    }
}

export function decrementLikes() {
    return {
        type: DECREMENT
    }
}

export function commentCreate(text, id) {
    return {
        type: COMMNET_CREATE,
        data: { text, id }
    }
}

export function commentDelete(id) {
    return {
        type: COMMENT_DELETE,
        id
    }
}