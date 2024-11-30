export type MessageType = {
    id: string;
    from: {name: string},
    type?: 'response' | 'message' | 'typing',
    time?: string,
    text?: string,
    message: MessageType,
}

export interface MessageList {
    list: MessageType[],
}
