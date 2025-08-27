export function checkAge(dateStr: string): boolean {
    const parsed = Date.parse(dateStr);
    if (isNaN(parsed)) return false;

    const birth = new Date(parsed);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age >= 18;
}