export const handleDownloadResume = () => {
  const resumeUrl = '/Gabriel_Porto_CV.pdf'

  const link = document.createElement('a')
  link.href = resumeUrl
  link.download = 'Gabriel_Porto_CV.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
