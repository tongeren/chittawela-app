interface ChildrenProps {
    children: React.ReactNode
}

export interface ServerProps extends ChildrenProps {
    server: boolean
}

export interface ClientProps extends ChildrenProps {
    client: boolean
}

export type ConditionallyRenderProps = ServerProps | ClientProps;