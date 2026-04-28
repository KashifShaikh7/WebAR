const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [
      require('../image-targets/Building.json'),
      require('../image-targets/target_model2.json'),
    ],
  })
}

window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)
