export function removeSuperAndSubScript(value) {
    return value.replace(/[\u2070-\u209F\u1D00-\u1DFF]/g, '')
}