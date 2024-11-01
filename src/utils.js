export const generateUniqueId = () => {
    const time = new Date();
    return time.getTime();
}
