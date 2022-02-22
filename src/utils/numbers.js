export const fallsWithin = (value, start, end) => start <= value && value <= end

export const rangesOverlap = (s1, e1, s2, e2) => fallsWithin(s2, s1, e1) || fallsWithin(s1, s2, e2)
