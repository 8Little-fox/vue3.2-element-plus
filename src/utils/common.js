import * as XLSX from 'xlsx'

class Common {
  /**
   * 获取表头 （通用方式）
   * @param {*} sheet
   */
  static getHeaderRow (sheet) {
    const headers = []
    const range = XLSX.utils.decode_range(sheet['!ref'])
    let C
    const R = range.s.r
    for (C = range.s.c; C <= range.e.c; ++C) {
      const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
      let hdr = 'UNKNOWN' + C
      if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
      headers.push(hdr)
    }
    return headers
  }

  static isExcel (file) {
    return /\.(xlsx|xls|csx)$/.test(file.name)
  }

  /**
   * excel 时间转 2020-03-22
   * @param {*} numb
   * @returns
   */
  static formatDate (numb) {
    const time = new Date((numb - 1) * 24 * 3600000 + 1)
    time.setYear(time.getFullYear() - 70)
    const year = time.getFullYear() + ''
    const month = time.getMonth() + 1 + ''
    const date = time.getDate() - 1 + ''
    return (
      year + '-' + (month < 10 ? '0' + month : month) +
      '-' + (date < 10 ? '0' + date : date)
    )
  }
}
export default Common
