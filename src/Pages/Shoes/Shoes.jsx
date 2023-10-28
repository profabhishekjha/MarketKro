import React from 'react'
import CardSection from '../../components/cardSectionshop'

const Shoes = () => {
  return (
    <div className="mt-10 grid grid-cols-4 items-center justify-center gap-8 p-10 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 ">
      <CardSection
        images={`data:image/jpeg;base64,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`}
        title={`Black Shoes`}
        companyName={`Nike`}
        description={`This is best shoes falls in premium category`}
        price={`2999`}
      />
      <CardSection
        images={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhYZGRgaGhocGhwZHB4cHBoaHBgaGhgaIxkcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjYrISs0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALsBDQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUGBwj/xABAEAABAwIEAwYEBAUBBwUAAAABAAIRAyEEEjFRBUFhBiJxgZGhMrHB8AcTQtEUUmLh8UMVM3KCorLyIyRjc5L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAjEQADAAEEAwACAwAAAAAAAAAAAQIRAxIhMRNBUUJhBCIy/9oADAMBAAIRAxEAPwCnTpNc8Fxgc/onYhjWvdkJI5bKqx0AAyDuVKce0BzPfmV871gw0B+KaG91OLA9gIEKvScxyla/K2OU28FHlcMsoVPDyMuZN/JEjfmn0nj4gRqmV8U2QdD7Squi8E9QNMW01MJzHkiBr10hR3I1vqYKazKGkOJmZB2RMqQ+tSd+mfDkmfw5JAeeQiEBWF25iR84TsUWm7ZBtAH3oq2RogdSYCQ4AW+IeysUqYAE2tryKoYitDo5xeLqOhi3gEgyJiIm3gouSbucGznbkuR96KpWrW+fTyVapix8JIJPKNEyjiA7nbQH91KznBXT6L9Mgj9UkWTg4s0Ol/NVG1sjCCDNzYknVSPxQyhpMZrydVVOCKfg+pUfMkmeahZULniCnOqET/LFj1TMKzvSLON/EK4KSuuSYO10GzADgIHtOgU73zBNg1Mw1XMSdB1GvVMlXI9lm5TeJuBE9EeU+iFSvlNrDTxJULKhLsrrZfrzWXz2GiZzhENtunDLabc4GtyqzKoa6OU6qZjznAyd06u2VWWzUrkJpMzHu+qa9g6R9E5lQyWkWM36KFzCQIgNGp8FcmlkmFebdItrEJjG9wuJjafYQizDEjPJEec7I4loc0DnMk7bCEHORrHuMc42VcNcXQJnl02U5Y4X3IEnYDZRtY5pM7brRE+SFz6hhr9B5KzSYDAbtczoquR5eZuxR1c4iHCOlv8AKrNd9mhRc9rgduZ0hNrVpcYLHCd4jp1UNOiTBJMm5EjQpmIpd45QIO6hNvJMXOMEgabX9VAynI+EEz5+qk/NfHdskwkTLh5R81kwuhNptBJI/YJxoFzbguA0gwmtqciUcpMZSR4Tf0VWWT0A4ckyO5052QbhwSBPdm+6YA4EzM7HWVPhi51i1wttoq+hj6IU4zEGZ5eCT9BaSRdJ7Ht/03wbDuuv7Jxwzxf8qpeLZHX2gQoofw1wgtoNtA9057j3YA5gptHC4l1/yahvpkcABvol/s/EFwH5VTr3HQPOFpxWS8DWYcFp5O66JrXtpugkG0hXmcExOgo1J/4dZ6lPZ2Wxbn5vyiOUHL+6KKfozlZKQOch8Bs7/RPo4UZpbAHMELbp9lMVYupiTYDMLeN1E/sfipDsgmYkOGh5wq9On6LmTIFPvESI1nZWKWBa4HMWnSCSJgLfb2ErAEl7CdTd3sIXCYjjbRPceADGZzeXKxRaVL0E0bDwOZaWzHTRRYek0lzxBI8rKgMfTeAGsz+Byjxgae6s8KxVAOLaz30mme+W52tPXKAQPEJ4aTyXC7Lpa2Nr/wB0KjJEsFxpy+anrOwFJsHFvfawYyJ2+IrFxfHaQMsa8x/MdVlw0amPhfFExnefBKtlp997mNMAX5Bc3X4/VfZoawdLkeZVB7y4y5xceq0o+m1KNzE8ZpaNYXXu7QfurGA4y2o8MLYnodenePyXLvetLDP/AIemajrVKjYYObWH4qh2nQeq1s+GsSjpcNiGvAOty0xuDB+SsOY5wyQZE2A5dVW/Cp1F9d9GswOztzsJJs9hOYa3lpn/AJF6ljMLgsOzPUbTY0fqdAnoOZK0tH3k4ZwzzWq3I0tkEuAsOWX6qKgQXTeAPVX+0HbShJbhcMw//I9g/wClkH1PosHhvaKua7DYONhkaBE9IghYcJezaimX6gzfpMzbW3oi/CEfDndfSCD5CJXf9j+PMxVN57pqU3lj4AEiSWPAHIj3a5dAuq0E12ctzXB5Ezh9d4gUah5WY4T7I0+yGIIHcqTImSAI2uV63mQzLotGUTezzQdlcUTdkXtLmi3kn1OxOJdBJZ07x08gvR7pSU8MjfRTw3A8OxpApMuZMgG58eSlZw2iBakwf8o/ZWiUAQuiSMEDOHUWmRTpg7ho/ZTBjBo0eicQlCAb+SzXI30RyNHIeicXppeIQDyN4SCaw2RDt1QEpT1UZf1RB8fRASBEFRg+KLQUA+CgLkBNq1GsBc9wa0alxgDxJXmH4l8ea91Onh67iIf+YKZ7hJy5CXtN8vetfUdVGVLJL+InaPFNxDqNGqGU2saDl+JznTma7mItzGvjHnpxkn/1AQeZ1afv6DZDNVGvfH9XxevNbHDqbKrC4sNjBDhafPVYqtvLO0xngqN4Qww9riAbhzOf0U+JZ0MesrSyNY0CwaNAB7ALKxtX122XB6jXJ6Vpp8YMTE1Q13dBA6xHpyT6D6Tj3y7Z2USGk6S7+yfWY0kZs1zADWyT9ytKjUp1crQRkZcMsJdzc7ciYA6k9F0n+yy0ca/q8JkPDeGU3hzn1IA0DLk9T3THmE3FcOZ+io4bCoInzEfJXanCe9npk03f9Luhj5rQw+Flg/MDQ+85ZiOSuJXDCdPo5aqWUDcZ37uENHUN/V4n0UYw1asS8gkHVzrD/wDToC2sYwseMkACZIMEeAAg+izq2KzSXZjBiTPLqZ+iNNf5GV+RY4Ziv4Z7X03TUaZa4DuNOmhu607DxQx+Oq1n56z3Pdu4zHQDQDwVVuJZFrffRMLwf1DzK5Yr2dE57QS/mrX535LC8/7yoIYObWHV52J0HmVTGKYy4Gd/KR3WneP1Hx9CqvfqPzOJJJkk6yql7fRlvPC7Oq/DPi5w+MaCe5Vim/a57jvEO9nOXuzgvnCjQyxFiLyOUaL3rs3xQYnDMq/qIh42e2zve/gQt6WqqbRz1tJykzSJTXFPcE0ruecalKRjdNMFASW3REIQlZAHMN0MwSCXigDmUbhJA5J7eiKAUoFoTkCEAp+4RB8Uo6+yOXqgE0oh0XOmvQBEDwXJ9vOPspUH0WQ+pUY5pGoYwiHOdGljYefJRvBUsnO/itx2i9jKDCXuDw8lju7MENpyPimZO0brzvDYR8d15DufNs7RsnspvzQx8jUA94dSZ02WlgPzA4B7GBvMg305DxWX1ydYnLwScLY8ktqMAAAhwiCfBa4AaJmyZTHRVuIYnLaeU+f3815rZ65nHBDjcR/Ybf3WS+pJsCddNSm4ivJUlOu6m61BxuBmc4X1NvIElc5l3X6N3SiRMxZa0zReGwMxBkgG8GNJAMxeDykK1Sw2HxEFhyv3Hdd6aFLA8Spg5HhzHf19bk+Z1joOQWw/g1GpD22OudhgnzXs4lHjSdMbwvBPpkh787YtaCD4yrldsCBqfYcyrTnAD7+5UIZzOp16bBcKeT0SsGfVwwiIWVieGMOghdBUYqNQHZc9zXR02p9nOVuD7KqeGu3K6dw3VUhR61IvhlmPS4burrMM1uitFqjzSudXVdm5iZ6ICF2X4Z8VyVnYdx7tQZm9KjR9W/8AaFyzmI8OrFlVlRurHBw8is6d7aTGtG6Gj3ghBClUDmtdycAfUSkvrHxxFAuCIQBQDyEg3ojCQQCDrJZvuUYUZESgHA3iESeSFEc+ZT3TsgEUCDt7pAO6BEM3KAEHYJ0GNAs/iPFKNC1SpDokMB7xHhyHUwFzWO40+qDBNOnBsCS948hICzVJG5lsvdo+0LmNdSw0OqaOeLtp7xyc/py57Lzt9F7ILgXElznlwzF5du4gkRc6T11ntuGupupsewQxwBG/n1TcSxpGgWNz7Z12LpHAOqEZjA6AAlxHXrPKwUjMQLGI8fYeK3cbgWnkufxnDCNPe6u6a4ZVNTyi07HMaI5rnOJY0udKXE3vbGa8T4Gd7KvwzCZ3ZnyGSI2NwNYkzMRzWKhM0tRrsu4DDvDRVdTc+5gAiw5Og6zeFO/GMe4EOy2sHCIGuuhm3o3ZbOMY6CwaBtwCAbnWNY2081To4FmWHtE7axtpz/dWZ2kpun2WcLh2PbBDXDyK1MDRbTZkYIbe0k3PU3WZwzBMYSWCCRGpNtrlbDCFim2zrKSQhdx2Fh4xc+8eqkcFWe/KSeRv4GI8xZRVce0CZHkVNuRuJqjVm4mu1upVXHcUdBPwttc63MC2qyXFznGZNh63GieL6PLjos4niAMwqB4iducKdnD3GM3Ln7Sg7hwWW9Oeyry1ygU8c11jbqrlGBdZlfhx5KTh+cnKbQudQqWZOk3UvFGhVqSICnwWEJcJCtYbCBtyosXxunSn9buTW7+PJZ09DL5GprJLg9h4QT+RT/4B/ZXCVidjcZVq4Ok+swMec1haGBxDLcjlA/stmR0X0UfMYpSTRH+EZ6FUg+T0Qv0TgEsqADJQc0myIB5p8SgCJ8E2pUDRmcWtA5uMD1K5/tB2mZQcKTIfWOoPwsnQvjncQ0ey555/NOas9z3bOkNBtMAAtaI9Vlt+jcrPZ1GK7VYZkgOLztTE+5gLnOJ9ra7+7RaKbT+ojM/1Nh6ItwtDcWmY8bddFSxOPw7CMgziPK8Xny91xp0u3g7zMvpZM3DYVxeXklzyZcXAEuO5dErQxDHd5kd91Nws182174ORoO1i5Vf9quIhrYMzIbGp/aB5KLE16r4kutp0+4Hoszqpd8mnpN9cG3gsZRDGsa4AMAbl0IgARCgxHEWaBy5J/CnucSJBJknSTGunX3Ub8I5nxPed/h/ddcKlwZ5l8nSuxTTzWbj8exovr6fNc/Wx3dyNBc8yA6BOsi0EaTPRa/DOz7qsPxBAaNGNMC/NxGvyWdiRd7fopYHAvxb5iGTr/N0H7rusNwJjGRF/kpGPZTY9lAML2MkAkAN/llouBbZauDrh7Gv/AJmgxtIvfmopa5DtPg5avwSCS2xMTbWBAErGr8KqsBDROsGZgnnc+y9BrZeayMZiGjRad7VyFO7o4stqsFwZjnYE/RP/AIp4aXG8ASG3MnXxj6LoTVBUb6bNS1vmAotSWVxS9mNWe+BqbgHKBImLmTbVRswzs4LQHCDe85530DVqVH0xoxs9AJ09rBUquPc4AsEtcYlsGBME66A2K3n4jm19ZE3hjGjvEASTEybmdfvxUdXE0m2bHkmVZJd+oHTdpuHGdOojZZmKwrhG4FpMnSJlYrH5M3Lf4otOxzZsQrGGdnMALFp8Mc65mPH+y08HW/LF7AcyfXw2XF6M0spnVa9S8UjYbhWNHeWLjsUxjyZEA6c+X35qri+MPqHLT05uPJVmYVoMvJe7d2nou2np7Tlqau4lrY+tWs3uM36eP7Kbh2CYwg6u3PLwCb+apKT7rqpSOLps9n7Nn/2zLA2PP+orWa7pHosHslVP8MyQefn3jfwW21y0ciaUCUw+KP5g3QEvJEO/wnBRPMA+yAe27jss/tRxX+Gw1WsBdre7PN5s33PstGk2B4rkPxLxtIYYUXuh1Qy0cu7ueWtlDR5nSxzpLnOJe52ZzpMkm5k87lSnibm3m4nzm8cyLrDcXNtqo3VVcjB0lPi2sAAu1O5AgExcqxSxzByHnf3K5L+IjdRu4ieSzSTOkVg7tvEWbgJj+KNHNcGeIOWlwag+u7ZvM7+H7/Ncmn6O6pezpRxcuOVgLjsLqZvDnvu9wYNviPtYLoOGcOoUm5RFviJ1PIEazffZabW0rZom1hvFxP6ufJTZX0nln0jlKXDqNMdxpzc3cz+3grFGkwuDvhO9pv4rW4hWoNFgZBERz6X1F4XPuqFxJHSbmLawOX1XOnUvs3KVLODXxLMozNfnFhlzAN5yTMmQLCICrN7TUqU0oMU2gNP9AADddLZeqy3U5EEqhWwDT9ytTrp9oj/jtcpm/iO07HAw4LJq8ZY64Mqi3hzVdw+AbsPvqq3FdhTc9EX+0XO+Bvrb3P7KQB74ueo1kEaS0wD4nZaVLCDb1urTWAarScz0jDmq7Zl0sE+SbiYEEyBGhDdAY68yrAwDYvfW1gL3PdFlbfWa1ZuJ4gORWK1sI3OiLFUcumizHszOT6mLLuagr4tlNkz/AHOwXBTV1+ju3MST4rEMpsuYC5pz3V3GBlZNzzN5jxSJfXfmdZg5fQddyuk4bwN7wAWlrSBAEAxvde2JUo8F3uZgPqNYMjBp93PMqJtUxfWT813+B/D+mWy5zpm8GPot/hfY/DUjIZmdu85o+gVSrJl1ODzPAcHxNYgMpvM8yIHqV1fBexL2vzVy0tABytPPrK9Do4QCNLKwygAtpGGylhKeVoaJAFgBsrrWzrKkNNPDYQgwMGyeG/YTgPuEhGxQDwDuExzSYkpwCcfFANlx2+/BcH+J+FL6bHFktbmBInuzESeS74tVbGYUvaQDAIPVAfN76Tm/C8xs6/uoy9+wK9X4r2GDyS1jB1bLT6THsucxPYSu0wATtF/8LJs4kvfzAUTnO2C7RnYTEnVhjxb+6vYX8PXPs5z2Hq0EeyA86129F1vCq+SmALEtMWBEcrandb/EOwlDDMFR+JkzDWuaGteTy1nST5LkajHMs0y0abhVcEzk33cTdFzyEXIuP6eXL5IHi8kEgEicpsYkaydPJc2/EOOsqIYmDoVcoHXUuJSZMSfbpPO6uM4kNguJbizyBUrcU/ZYpI7RR2wxTDqAgcRS2C5FuJdzKX5x3XBy/h3VL6dWa9HopP42mOYXHOq9U01x/Mptr0i7p+nWVuLMGio1eLLnX4to/Uqz8eP0gn2U2U/ZfJKN2rjnOVV9bmSsh2JqO2aonU5+Ik+61OivZiv5Hwv1uKAWbfw09VTAc85nm237beKvcM4TVrODaNNzzuBYeLjYBd92b7BPa8PxDRa4bIIn6rvMpHnq2+zI7KdnnVSHvblYPhEa+Wy9EwfDGsvF94n/AAtOjgg0RCsNorWDk2VW0tgpWU4/yrDWJFpVIV2i6laLpMb3lKIQAlKU4ojwQDAUpTp6JT0CADHTyRzRySY20IOd0Q0STH+UM3T3TA47IwdwgCPD3TXDp9U4zv7Iwd/ZDIxzRGh9k0tA5fJSEdUG0wPFAcf+IuGa/DAlk5XTppII5cl4xVotnulzfOQvpHFYXO3LyOv7RzXn/G+wWd2ZgaATctsfSYUZpHlcPH6gR1B+iOZ/9K67E9g8S02aSPX5KqexeKH6DG/9jCmSnNl7+g90i5+49F1zOwWJP/j+5UlP8PMUdS0eqFycXD/50srv5yvQaH4Z1v11Gjwk/Ra2F/DOj+t7z0bZMDd+zyf8rdxPml+U1e34b8PsCz/SLz/W5x9pWizsvhGtLP4dkc+7fydqPJXBNx4CykOTfQLTwHAMTW/3dJzhvoPUr17inZKgaT2sYGucAAZJy9bmy2eC8OFKhTp/yMaPExcqYJuPKsB+HOJfBfDB4tJ+f0XWcK/DvDsIc+XkfzaekLucgCIVwTLK9DCtYA1rQBsLD2CmDenzTsxSKpAZUj4ooBqAUfcpEBEhIsQDRGwRLZ+ylBRhAAFIhOLUAEAkPvkjPKQkT1QDZRnoUkD9ygFmnkUp3+SMlGTt7oAAjr6Ihw+whl6IgjwQBPRODgmymzyQ0PkJrmymONwFMbIBoAQI6p5clmQyMgbpABOn/CQQCACIjdKU0nwQDnRumAbkJyUIaIazZgKZpjZCSkT9wgCSEJCBKKgEXW5oZkQUJVAieiQmNEkkMiJKQcdwkT1THdENCk7qQtUb9VKFAMsgAE4oEeioF5J7CYTIShDIYTSClkCWRAOAKDRyQ/LCQYN0A5zSiJUbmhFoB5IBzmoFsXRLNkiz+6GhlISZUqaG25ox4qAJCV00s+5SjxVAr7JCdk4t6oZT9lQC8kCEsp3Ry9VQIHdEtTcp3SjqoB0IDwQY08z7px35eKABCWVJuiQKAQajCGVLKEASEHFHL0SIGtkAwwjIRARQET+m6kaiUkMgzdEiEohGVTQpOyaSU4hDyQyN/L6ohgTmoFDQ0MCOQJyIQDWsGychunlANQLU4c0130QCKLkRoEUMjQEAE9uqDtUNAAnRFEJtPn4/QKAKMJNQcgI4M+CgxlYsDI/U9rTOxmfkrVLUqrxL/T/+wfJyy3wC1TFk17ZIHmfp99FJT0Qbq7x+gWgRhvNSIlBuqAaUiEMX8Pm3/uCkKAA8U3KnlJuiAEJZUWolUDISjonv5JFQAhNhB5uqmJqEAGeY+iZwC6Akquc7ooZP/9k=`}
        title={`Leather Shoes`}
        companyName={`Puma`}
        description={`This is best shoes falls in premium leather category`}
        price={`4999`}
      />
      <CardSection
        images={`data:image/jpeg;base64,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`}
        title={`Black Shoes`}
        companyName={`Nike`}
        description={`This is best shoes falls in premium category`}
        price={`2999`}
      />
      <CardSection
        images={`data:image/jpeg;base64,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`}
        title={`Black Shoes`}
        companyName={`Nike`}
        description={`This is best shoes falls in premium category`}
        price={`2999`}
      />
      <CardSection
        images={`data:image/jpeg;base64,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`}
        title={`Black Shoes`}
        companyName={`Nike`}
        description={`This is best shoes falls in premium category`}
        price={`2999`}
      />
      <CardSection
        images={`data:image/jpeg;base64,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`}
        title={`Black Shoes`}
        companyName={`Nike`}
        description={`This is best shoes falls in premium category`}
        price={`2999`}
      />
    </div>
  )
}

export default Shoes
