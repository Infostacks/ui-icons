const educationIcon = (isActive = false, fillLight = "#788BFF", fillDark = "#3326C9") => {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M3.25 6.5V14.625" stroke='${isActive ? fillDark : fillLight}' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.6875 21.9375C7.28203 19.4919 9.86273 17.875 13 17.875C16.1373 17.875 18.718 19.4919 20.3125 21.9375" stroke='${isActive ? fillDark : fillLight}' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M22.75 6.5L13 9.75L3.25 6.5L13 3.25L22.75 6.5Z" fill={isActive ? "#3326C9" : "#788BFF"} stroke='${isActive ? fillDark : fillLight}' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M17.1986 8.35046C17.9427 9.16478 18.4339 10.1779 18.6125 11.2664C18.7911 12.355 18.6492 13.4719 18.2042 14.4813C17.7593 15.4906 17.0304 16.3488 16.1064 16.9513C15.1824 17.5538 14.1031 17.8746 13 17.8746C11.8969 17.8746 10.8176 17.5538 9.89362 16.9513C8.9696 16.3488 8.24072 15.4906 7.79576 14.4813C7.3508 13.4719 7.20895 12.355 7.38751 11.2664C7.56606 10.1779 8.05731 9.16478 8.80141 8.35046" fill='${isActive ? fillDark : fillLight}' />
    <path d="M17.1986 8.35046C17.9427 9.16478 18.4339 10.1779 18.6125 11.2664C18.7911 12.355 18.6492 13.4719 18.2042 14.4813C17.7593 15.4906 17.0304 16.3488 16.1064 16.9513C15.1824 17.5538 14.1031 17.8746 13 17.8746C11.8969 17.8746 10.8176 17.5538 9.89362 16.9513C8.9696 16.3488 8.24072 15.4906 7.79576 14.4813C7.3508 13.4719 7.20895 12.355 7.38751 11.2664C7.56606 10.1779 8.05731 9.16478 8.80141 8.35046" stroke='${isActive ? fillDark : fillLight}' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>`
}

export default educationIcon;