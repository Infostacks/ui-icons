const optionIcon = (isActive = false, fillLight = "#788BFF", fillDark = "#3326C9") => {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M12.7502 11.0928V16.8798M12.7502 22.6668C6.9972 22.6668 2.3335 18.0031 2.3335 12.2502C2.3335 6.4972 6.9972 1.8335 12.7502 1.8335C18.5031 1.8335 23.1668 6.4972 23.1668 12.2502C23.1668 18.0031 18.5031 22.6668 12.7502 22.6668ZM12.8078 7.62053V7.73627L12.6925 7.7365V7.62053H12.8078Z" stroke='${isActive ? fillDark : fillLight}' stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg`
}

export default optionIcon;