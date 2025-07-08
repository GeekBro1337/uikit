export {}

declare global {
    declare namespace General {
        type color = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
        type variant = 'solid' | 'outline' | 'ghost' | 'link' | 'soft'
        type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    }
}