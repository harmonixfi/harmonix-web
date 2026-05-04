// Chuẩn hóa timestamp giây/milliseconds -> milliseconds và parse UTC
export const normalizeTimestampToMs = (ts: number): number => {
    const n = typeof ts === 'bigint' ? Number(ts) : ts;
    // Nếu < 1e12 thì coi là giây (epoch seconds), nhân 1000 để thành ms
    return n < 1e12 ? n * 1000 : n;
};

export const toUtcDate = (ts: number) => {
    return new Date(normalizeTimestampToMs(ts));
};