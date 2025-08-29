import qrcode
from PIL import Image

logo = Image.open('logo.png')
basewidth = 100
wpercent = basewidth / float(logo.size[0])
hsize = int((float(logo.size[1]) * wpercent))
logo = logo.resize((basewidth, hsize), Image.Resampling.LANCZOS)

qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H)
qr.add_data('https://www.aowl.app')
qr.make()
qr_img = qr.make_image(fill_color="black", back_color="white").convert('RGB')

pos = ((qr_img.size[0] - logo.size[0]) // 2, (qr_img.size[1] - logo.size[1]) // 2)
qr_img.paste(logo, pos)
qr_img.save('qr_with_logo.png')