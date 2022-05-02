import I18n from '@/i18n'

export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error(I18n.global.t('msg.login.passwordRule')))
    } else {
      callback()
    }
  }
}
