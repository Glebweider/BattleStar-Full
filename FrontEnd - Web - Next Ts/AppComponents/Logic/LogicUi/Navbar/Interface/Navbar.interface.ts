export interface INavbarChatMenu {
    user_username: string //Имя пользователя
}

export interface INavbarNotMenu {
    user_username: string //Имя пользователя
}

export interface INavbarSettingsMenu {
    user_username: string //Имя пользователя
}

export interface INavigationMessageIndicate {
    CountMessage: number // Количество сообщений которые пришли пользователю
}

export interface IErrorMenu {
    Severity: string, // Error, warning, info, success
    SetIsOpen: boolean, //Открыто меню или нет?
    TextAlert: string // Текст в ошибке
}


