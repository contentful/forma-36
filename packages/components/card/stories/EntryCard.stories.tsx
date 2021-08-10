import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Flex } from '@contentful/f36-core';
import { SectionHeading, Text } from '@contentful/f36-typography';
import { DropdownList, DropdownListItem } from '@contentful/f36-components';
import * as icons from '@contentful/f36-icons';

import { EntryCard } from '../src';
import type { EntryCardProps } from '../src';

export default {
  argTypes: {
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    rel: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: EntryCard,
  parameters: {
    propTypes: EntryCard['__docgenInfo'],
  },
  title: 'Components/Card/EntryCard',
} as Meta;

export const Default: Story<EntryCardProps> = (args) => {
  return <EntryCard {...args} />;
};

Default.args = {
  status: 'published',
  type: 'image',
  title: 'Closer',
};

const thumbnail = (
  <img
    alt="Contentful logo"
    height="40"
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcMAAAHDCAYAAABYhnHeAAAklklEQVR4AezdCdGjWBTHUSQgIRIiAQmRgAQkICESkIAEJCABCTi4c2t63zeSj5d3TtVvpttA/wt4kObPABFxzbr3Ddn4vnu2fNUax1m+0/hZfda975I1+r2kz/4i6bOhG983vx+dLcq1Zks2fTGaBlMyhnqfwZveD8Ue9dqyJbtnQ9ZlbdaUn2QMpfar0VuDP7F/ZyQbyRhK5x6+WzY+/EqPNZsMpIyhdI5bnUM2neZ5noG8Z71nkXpcxlDqXPUVZcsm4yhjKB1z5TcbP+NYVTKG8syvttuebqt65ihjKF2yIVuiZuzZnPU1vdIhYyi3P++u/n6CJRvcTpUxlAF8B1bDWHLGULoYwIOxlnQrVcZQngGuAY81vx/G5izJGEp9NsfzwZ5N2TVrJGOot7oNusc5wJYNbqPKGOoZ9V6FoACTdxhlDHV0l2x0FYhDN6pxDKUumwLKt2ejVzRkDOVWKLiFKmOoX9S+H8EtoA6LUZQx1IdazwNxCtU7i6+aMZQRBKMoYygjCEZRxlBGEIyijKGMIBhFGUMdN4LA6vSpMVRZeUUCvJKhasdQXbbGMwDTub5oI2OoSzYH8FafeTvBt09lDB2OARyyUZVjqNvpngsCix8aNoZ6TpfTf0QbuEe4dWoM5ZYosGe3rJEx1DF1bolCsRanTo2h/q02mwIo3Z4NWSNjqD/r9nJfjwFWB2yMoX6v1juD8PJG/9YZQ7kaBFwlGkO5GvwI8CwxM4bqXA1CzZw4NYa6B4D3EisdQ12zNb4FMNXw9RpjqP4Xt0UBNodrjKEX6AEcrjGGbot+BDC7bWoM3RYFcNvUGBbeFMcA2P2AsDEsrdZtUeBBpqyRMTx7V7dFgQdbz/wc0Riqj+cA2D1HNIaeDwKc6DmiMVSbLQHgJ6GMofcHAXzGzRg6KAPgYI0xdFAGwI8GG0NDCOCkqTF0YhTASVNjaAgBzsYgGsNDarM5AAyiMfSNUQDfNDWGhhDAIBpDQwhgEI2hIQQwiMbQV2UADKIxNIQABtEYGkIAg2gMX7GLIQQMojF0WAaAyRgaQgAqHkRDCED1g2gIAahwEI3hEr8CQG8M/QzT/wAMojE0hADcjOHrNMTfAGDPrsaw/PoAwCBWPIbXOAIAa9YaQ98bBTCIxrCo2mwLACp+B9EYrgHAo4wRxtArFAD0xtArFACn5ISpMezimQDYstYY+oFegNotEcbQr1AAcDeGDswAFM6BGgdmAKj+QE31n1oDwCfbfGEGgEK/UGMM5wDgrAZj6DkhQGE8P/SckP/YOw/oqK7rX7PKv5dopfcovSd6vb+n9LgDBovOCCxwt9w7yL2lKL0nCu5dWAJTjdx7wBWrS5QAQqCRUAEVfm/thQeHsYCR7szcc+/5vrV+/5JQ3Nb9vM/Zex8IiU3dUn3n23l6k1RTn1nWtBz6cy0A3B86KUPuCQHRpeR1y1PSNY+N6Ozl0sKa3ObM5fvt97Lo9lf22++v9dsQJnB/mEMZMk8ISC9V0d345H5duGq/CcnpnLnsgCyrNozYHzuShFwzERlmLxMFEDKdfQfEd89r0nWPp6QXn1yyZkS/+8uw/TnanytAtkhG4bg0KsejSQGEJL/fv7RfF6yMovyCV5A3PTWi5Y37HZAjsL8UGdYpDwD0DR64W6tar1HkR85dMaIfPztsf43sr1WsAMYtGKOQBFR/P352rPIj1zw+rHWtVI0wpuPSQmTIs0wOQQVoowmL12VLgOSi1SOqrh+hYoTIHpdyPOoNkJ8KkCyqG5JVjABROi7leDT2MPpgd4BnLc+3BMnptft16zPD9vcAnIfjUo5HYwpVoEvHoOS8lcNa0TwicBWOSzkejRU0w9TUu1wFktNq9+tXLw3RdOMcHJcyXA+xkODvX4qaAMmNTw1pU/eIwAU4LmW4HiJLfaft/Iy6FMjix/fp5e375SVQjQzfmUoBZChB2wMaLymQS9YOeS9Fdpciw2IBZNAZGv9KkFyxbpDjU79oe3t3KTLcIIA0uBPk+NQbKUIFMmSmEI6wKaam3mchkAU1I/rpC4N+bLaBUJtpaJoBZ+cEz35rRIKQ05YN696NuTMiMHvIg73g3L3g4ZpjCDl35aDqdw8r2wDNNDTNgDNHore/kpkECbnx6b3xPDqFNh9lWCeAt0YlLlyFCMnYj07r2ocENNNEWYYJZQGgGiRk0eN7tbN/RBCrzTQFvsiwTdkCqAYJqR3WipZ9ig1Q5YMMK+QxkNtqkHCXCIxaOC9DRinoFL3qUURIcpvTlg9p/Y5BAaMWTsqQqpC5wTPzODdIGNZf8tqAIPIUx1GGhQIPm2TCW6VGyGV1A+odHBFQHYYmQwbsobOPY1HCsSlEYxCfqhBy1i3Ki/PEpWPT5S17BQzi51GGVIXcD47+QZq/VJr7oDT9Pqnk3tEz8/4DP6bs4ex/EAn58Qv9gkiSiJIMqQrhkPtBE5rJbdJd0jFLpO/9eWw57jbp5Lul2Q8gR5K9XLCGe0SqwxzKkKqQRpnrHjcRmrxMgCa07MbEOPfB4B9DQk5fwdYaqsMcyJCqEBFao8zM+62aM3HlNifdgRSDh5xaO6iNu/YJDKpDqkIIPEh/Ws2gTrg9gOACSHH+0mAfRIIQ17XvE1AdUhVCIBFOu3fYxBRqSu7lo06CdZo+0NAv8Ls6pCocF7B+a69OvGMkRAmmV4k02RCEyNxhHmVIVQhPNbfqmCX7nZBgevdpaTUfdoIQ2UrjjgwrBYgwhByzBCEShDh22FkatZcpABEiRIIQoS4UGfIyBbzU1uySCBEiQYhQmFcZ8oo9dHS9rhNvHzTJRCon3E5TTbAgxBVtfQJnqXJZhglBvNi7XmX3t5hcIplJd/FRDxLmEPeqpXufwFkKXJXhBkF8GGzVvY9fY1KJdGY/wEd9/CFnrt4jcJYKF2VYLIgPI13a0/AfdeySkcjL8JglHJcGC/nT6z2CeA/hM2QPo4pQrV/Q5Q8/ZjKJRabewwd9/CGlNXu1o39I4CQJl2RYIIgPW6eo9eWvmURiFPaYBgtZ9HSXIL5jFoxTwKHsvFxqmKBFNauiIjmqQ0J1CEXZkyHjFND1GxOhJfhdIXeHJIa5+YWkwEmqXJDhREEsRijU+E8mQt1dt8jkEcvMvJ8P+vhD5tT2uvlKPiQlFYQtw2pFHxpmmt5/sCosu785uHiYO4xpGMRfu7lXEL9GGl6nAKn9v5gEUzFpxDh80IOFXPT4boGTbAhThuWCWDTMpPLc88fHXoZzH+SDPv6QmbVJjkpjuK/U58YZ6F9nAjwklSuqYi7D4C/jE7pKX+0cEDhJZRgyLBJE+56w8Z/fIcPT7n8z9jI8+W4+6MFC7mpICpwkGUiGbJzhnjCV2fdsj70MT7qDj3mwkGue2yVwlon5lmFS0QR23WziGzXH3TYUexkes4SPOaGJ5lCYOWS20ON5wlGSgUzoKCVk9iMdgng97eTbESm0fM6khwwdnF+zxoz0zK7tsf89auznIKbwOkohXjOHPi3lho6L0uSHDPOZU2uGlKjttw+pptV22lGbrnt+pzVjWPTs9n7rUjwkqRZ++9/p/50Nf9vPu+3Nbvu1dOFjXfZr2++h+TX7kJbPMoTqfMgwoUjCQ70p4SHD/LXg20ezbHXnQemlBJdLbJm0/T72+9lLCwtW9JggqSSR4RHgqNSX9WvQ9p+Q4cHkrvKzY02T309e7rTKzYlXDlKCtD8eWzSdWN5N5RgwM2p3C+J1VMoRqT+vUWSUibcPMFoxRgFalXB2XacebulRS/c+RQH74/zFy0mVrUwixnFkau0OQbyOSjki9WK4/p8yluG8e9uQYQbNLvZ6QdmaDjuKDFD9uSXGBSt6OUr1drSCo1KOSOPOlokZi/DIj/qyjs2qQGt8+dH6XbFdx2VNPJc/caCDFekdPpc/s10Qr6NSBu292D2aef649tbYy3D2A2NvhJn9SGfEqsDgd4w3PNet+cv6kd8o/1IUv3VsHJXGedAeWr82Zhk2rS+KvQznLx2LBO0o1N9XCuzP+0+v9yDFv4l15loFHQ0gYxkyaE/TTHom3dEXWxGecHuGXaHBJRg7Kf5qQ69OreX41DpJ+ecifrtK4/pcEzS9d9wyvHjpk7GV4dR7jtwYYx+637/Ox+5IUrzu2R77FwZvZXjOYx2KH+wq9e25JjbNZJDX/vJ/vDsite7Qy57ekeGdIGzctU/la3u9E6GNodgITaSAtmzKsEJRg1GKQJl8xx4fRipSR6LcAY2T29+wo9NBX2Ro3cT8C1M0KcqWDDcoGsD2cpNZ4Nxdtyj2XaS2LcbWpHEkGrzz1Icq0Y7R7Z+XSAIV2ZBhgaIDVWHDPwaXYQy30Rx326EfNarB3FSJZbXDcd5HGt35UqjLhgwnKhrAtjNNYlnLg49dGBsZzn3w7XGJcx7nbjCXd4mnr9gby6rQ7pTjC9toGKmgKjxi5t67JTZ3hXYsap2ikPuO08VP9lIVRgpGLBip4K4w1p2lxyyRSquHNOeR3bJXGyB/LHltwCqqWHSQ2iskkQcqg8iwUBGHDtLg+c3qn0dWhjPvH9S0ZVtDek0C1rXvi7wQZ63YTpNVPNgQRIYJgfvs/plJK6e5oPr56C3kvrtH05Y2O/Ah4x5xwbLByG6b8eN4lHtD7gvjQON7ci7DPW8UqOSuXZER4cl39ulbd7yECB1hZ/+ITlsera01tojBnwF77g25L4w63XeniQshTrpjQN/50xpEiBC5J8wY7g25L4w6LV82USHEvxHh96tWyV0Q4pmPDDkvQnuz0i+4N+S+MMoMtqYklXchnvXgG86JsPS+Nn33T7UCt+kblC5cs89JEdocqp8i5N6Q+8Ios2W6ySm0/Gjlnc6I8PKHV+qM+++ShvsUDWDR424N59scqr+P9nJvyD7SKJMapwgxL71wrKbcGd5S78l39mvN03N0/+M3R1CEcO/GsEcvUuv5Oj1fz8eeUvaRMk6RtSrx2CUjeZOg/V43LK/Wnjf+RR2vzYmwCKG9Z0jnrOoP7dV6lrWzp/RIMiwW0DgzjrtEE9QJtw/lXIIdr3/iwO9b/w1poF3RB6ob92rB8n15uxs8e90uZgi9JXMZVghonAmQ+x67UvPv25Q1Cdqv9fu1Pz3096n/utTzkiBe3LVxQGes7M9ZJXjR46zmExRlKsNqgbvsuCxNPu6L8aqaOs28e2fGR6n2Yy9e+qz9XKs43/nr1n9A2vmQ4g2ba256tlcLlgfbcWpVYNnKpH7xcpK1fJAikakM2wTu0vQxE0Kk07S+SLVPlh+Sl18szvDn/73UvljgDyYxey/x6qf3yB4Snr+s3yQ3ahLLu3X+oz368Ys9VgHyXFdGMHxP8wxHpNFL/Yk0zABAVptoaJ5htjBaqf+i1LdRAADZbKKheYYj0gjlX6VtvxMAQLabaKLTPAMckTZO5Xg0JwCwiYbNM1Fi2wUeH49+muNRAMgmFUeWIbhL8xc9leHfS5tuEgBAFqk7kgyLBG4y0uVxVfg/pcGdAgDIIm1HkuFEgZvs/q2/TTMM1wNAjjtKo9JJCu3f8bRphplCAMgZxSn/RaWTFBrf7Z8IbeVa8gkBAOSIxOFkWCdgpMKlUQoAgNxRMboMwU123kBVCACQfapHk2GBwE3avuFhVfg9AUC+YLyCnaRRoPFD/nWQ7lopAICcM4oMEwLmC12ZK6SDNCQAkGGFwD2S9/gnQ5ZxA0D+KE6XYZXAPbaW+reDlG0zIQKADOsE7tHyn/ySYfNUAUC+YbyC1ypcp7HAr8YZxilCBgAZAs0z4b9iT+MMAOSXamToOj3Vfsmw/WwBQBgwa8iMoSPwmO/fc0QKAGHQhgxdZ1OJX12kHJECQDhM4B1Dl2n+nD8ybDpBABA2yLBCECZ0ku74jQAAQqIIGbqMTyMVfRsFABASxSkZVgp4wzDM+0IAcABkWCdwi91/9keGLVMEABAi5cjQVXb93B8Zbv+RAABCpAIZusrmWf7IsOclAYALIMM2QRgwY1j/bmmgXQAQPsgQwoLXKuo/JgCAkKlGhq7S9ElPnmz6lgAAQqYOGYYLMmybIQAAZOg3bJ/Zdq0AwAWQYYGA7TPIEAA8l2GxICyQYd9GAQAgQ0CGAADhkkSGyBAZAoD3IMMQQYZ/LwAAZAh+y7D+AwIAQIYwOv3PIEMAAGTI803IEAAAGXoNMgQAQIaQfAgZAgAgQ88Z7kOGAADIEBitAABAhuDL0D0AADIEgw00AADIEHyW4Z7nBQCADMFvGdoYCQAAMoRRafhX3jMEgDzCE06FAvdo+qQfMtxUIgBwAWRogXBAhi3/TwAAyBBGp+lLfsjQpA8AgAxhVNone9JE868CAECGMDqbSjyaNXxVAOACyDApcItti/2RYedvBQAQIhUpGdYJeMaJjlIAQIbgFD1r8iIimmgAAJAhW2h4vQIAoDwlwyqBe9S/2x8hJh8SAEBIFKdkWCFg8J57QwBAhuAcbSf4I8PGDwgAwgYZJgTusWWeicKf7H1DAAAhMGECL1c4TOdv/ZLh9st1KAAAyBAG2v2SYdNnBACQZ9pSMkwFeNeQo1IA8I06ZMjrFe7lr2cLAMIEGbYJeL0i9LxLAAB5pCJdhnUC9+j4qUnCr/RUCwDCAhlWCdyj71X/ZNhSJACAPDExXYYVAjdpeE9upEMjDQBAcboMEwI3af5f/smw/TsCAMgDBekyLBa4yV8vNUF4ln+QRroEAJBjJqTLsFDgJnueN0H4l62lAgDIIXWjydACPOdEdQgAvlB9OBluELhJy//zszrcdIwAAHJExeFkWC1wk22LsysZOksBABKHk2GFgKXdrqXlywIAyAHFh5NhQuAujZ/OnmDYSgMAMOFwMiwWuMvmhf7KsPHdNNMAQDZJHkmGFnCVrhoTg7/56xwBAGSJuqPJcIOA1Wyupv8ZAQBkgYqjybBa4C7tJX7LsPnjHJcCQDZIHE2GFYIcw1Hp4DP/qu4/fPlg9r/yDxyXAkA+KTqaDIsFbtPw4chIb1/du7Xz5v+u9rKT1HTyTL3+3blHzJvHzJX9uC1nnaDOW/+HBh8/zOad7rsFfrG/r1+Db9Sr/5G16ru/5rCxHzPc0SmAozDhaDIsFLhNe6nzVd/2RcVqmJSSX7A0T5mljsXFaWL8R2mwVRBv+Q089rR6flWlXWddqp0zThtTOuecqa7Lr1F/7Yp0OQJsyESGlqTGCLC4u/ehj6k1MdkElpO88b2ENp06Wf0Pf+yt+8PC+N0fglV2JkATWlbTVX6pTIySAKoylWGdwG0av+TUUWjzzCkmrLzFpGiVojYfL4iPBJPX/tDEldN0zj1DvVW3C7ymPFMZVgjcZtu1TohwW8X/CSC14JXizopvSNvLBZHFjjBTEsxrOmefroHlKwReUpypDIsFbjO4U2r411DvBRunTAtNhOl3ioOvVgqihzXDdM4rNzmFlt2nn6+Rjp0Cr5iQqQwLBO7TcnwoIuxf8UFtPGaOiciZ1B+X0J6l1wki0xyTuhd0Ip0zF2jvo+sEXlA3Fhla2gRuk6zLuwi7/vAFpySYfmzafddvBe6LsOvS60xCjmWhen5YqdgDlWOVYZWARpoQRIgQEWGY6Vl8jWINTByrDBMC99n+o7yIsPvOTweSFEKEobbN2nX2ZWHLDiFC4VhlWCRwn+E+qf4DORXhwKPvTt0RRkqIfQ8vFbgjws75qUaZaGTPtdcrdkCb+S0DGUZy+B42X5gzEQ6//PeqnzjDBBO5NBxXqj1/uEOACMeXheq//Q7FCqgalwx5wYIxi83nfcfEEtm0TZyvnp/9XhAOtk7NxBLVdE4/VYMvvajYAInxyrBc4O2+0t5lHzShRD7bTlmg3RcskjVvQP7oXXKvCSXy2T17nvb39ioWQOF4ZVgkiAZ9G7NeHTp3PBrguNQ+ap2Js2VHdpD7jtHURpm4pPfWWwTxvS9MyTAu94bQMiWmYxTBs3XqgoMfNtt6AnSMju24dJ6GXn9VEGmqgsqwShDR6pCqML06TKX7xkqOTbOMvSUYKwmmpeeSSwSRJjEmGTJvSHXYteQz8RFh2t3hIf+2X3qO9r2wQRB80bbjg/RUhwYUBJVhoSA6DLRL9e8OJMPmuZNiKcPmE+aN+pHrvuVnVIlUgxml9/prBdF9zDeoDC0bBF7MHdprFHEUYWoQ/3AfOasSbQwgY3h7MFUNepVd0+dopGOHIHJUZkuGlYJozR2OcytN5y++FlsZWrZMKTvya+iLbpJ96OGwR6Kp1ya8TOeMMu1dViOIHMXZkmGxIFpsvWFcMmxbeHysZdh60vyMPnp2dGoffjg4LpE6EvU+3eedK4gUSfNYABlGfsSCnaUNnx+zDDceNyvWMkx1lWYY215jUvRegm+vUyO7p82M1hA+VGVbhlWCaNH5gNTw99wXpmU8H0CToh2f+nYcigRHuzcs1eDzzwoiQyLbMkwIokfTd4OsX/NixGIssTvFODfamPC7f/grpHeUfaUD990tiAwF2ZZhgSCKg/gZj1p0VBb5IMPUNppAse5Tq5zisN7NqkA7Ct11zuXILsP0Xn2lIBJUm78CyJBXLGLFlkUZyXD7df/TCxlunlyW3WOzsy61pdQmxigJ0NbSjXM8guxZfIUgEpTnSoYJQUSbaf7zUWW4reL/eCFDe9YpZ0do8861itGOUk04TjXC2LYdk3bwCpB0TSsRRILCXMmwQBBNknXpe0uRYe5jVaPJ0aqwfDbgWJVqQjb5Uf0hQ7bOBJBhHI9KobUsTYDIMIzYqw72xJGJyu7qTFomSkum1WTqx1vs17DYr4n4kCEcpDzXMkwIIvwi/ldT8kOGhCBDjkgDyLBAEF26Hjlsd+mOH/wn77pJCUGGHJGmZMhRqW+0Xxzg6SZkSEh36UyB05TnS4YJQbS7S+v/p7dD9x3TF/JBJ8wZMmifFRkWRH5XKcP4o75sEXcRvvn9BB9zEviR375bbxS4PWgfVIY+7SqFjtvfsbu0cWpJrGXYdPy8gB9Dwm7SuW6vY4NEvmU4URB9mmcfIsOtl34j1jJsn3RqwI8h4dWKGRp6/VW5D8815UuGljZBrO4Pe+7/eKxluL0k2H0hIV0lU3jCyV2qwpJhpSAm94effvtNw2Nnx1KE9ceWBv0QEl6scLt5BorCkmGh4gNvH9a/+yhHpSzoJjzsu3dZjcBJ2sxLYcnQUqd4AFtusoaaWD7y+8b3EoFHKghJlkzmiNRdyrMnQ2YOuT9sPrC/tK3sRFawkbTQRdr/y58KnKUgbBlakoL4CLHxe6NUh1SFhMaZ4dYWQTQaZ4LLkEYaGGiXdZhuOuf7VIXkQKgKGbR3m+KcyZBGGjpMB1Z/WhuPneN5BykhC2VV4UjHDkH0GmeCy5Dl3ZB8QjtujfZLFttOCbyUm9BB6vbGGUjkXIZspIGhplq1n/l9b0cpCHtI91x8nsDpjTMFeZEhG2mgu/pKNZWcEikRNp8QbAcpIZ0zytRdOsvtphmoNPfkTYaMWcD2m+eqYdIMf0RIuCecNlX76tYKnKYw7zLkaSdoXniM80JEhAQR8lSTCzK0VAhiLcTmkhJESGItwoGqPwicpzhUGTJmAa1lk9Qy/RSeZiJUhBAWdeab0GXIw7+w7aJ52jRrim13Cf3l+q1TGZ8giJBxipBkSHUIyT/8SK1TJ6n1pPmhiNB+X9asEUTIkH3oMqQ6hP5HHtKmkyfZo7l2Z5evu0Ee6c1aeJ8QEVIV5lqGxQIvsA9JZ8k0dUxfYJKyii3bx6f269mviwSzGkRoc4RDr78qiGNVGIIMeesQbDA5mZitnTPevr/bMqXMqji71xvvfaD9fPt1sv4hJCzeZqCeqjBnMqQ6RIg955erc/o7Ozvtbs8aXazr016RMMk1HFeaiv3/9p9b7Mfl8C6QIMI5tmKNR3qpCnMnQ6pDsA/MnsVXaNd0XotwLWShdk+bYU8xRVOEUB45GVIdgr0Ivmv6bKc+hoSOUV6foCoMRYZUhzTW7J42zT5EoX4ICS9P2P0gHaPcFYYqQ6pD7hG7T1+QukfMawix0wm7H6RRhqrQBRny+C/3iHZPY40LefwQEo5FS+y4nvtBqkK3ZMhWGti7rIZjU8KxKASsCqMvQ0uVgPGLM+zYlBcmsh+ye9pMjkWpCiMhQ6sOgWNTeyLHPlxZrRIJa9V4eomXKdyXIe8dQhq2Bqv79OBVIqFJpufMBaxV473CEGXIa/gQfpVIqAZpkuEV+0jK0FIugLQq0e4S2VxDjp6FqbvB+FaDUOiLDC1tAkirEm1DiLXEd85gOfdo4Ui01DpF471JBirNET7JsFijADDSsUO9V19pd0Ecnf5NOBItkc2r2j8fsQWSkgpiJMPga9oABp9/9q2j07mey4Dl2hyJsow77jIsVAYAw/r2VqJXXadI0E4G/Bqehw3mBR9kGHzUArhPnDvHAyny3mDqXpAuUUYpfJJhwViaaQAp2r5Juz+KnRR5fd5OAPyUIFSZD3yXoWWiAMbYZBMfKXIcigRpmkGGvGoBwY9P7WNKo0007wTTJAg0zSDDwiCbaQApWqONrXdjJMPtEQnrDrX1adYYgwQN9o8iw9xspgFe2Lc5RfvocoTq0H2gHWnb3xcbmXkLgCJkePhsEEAW7xUPHKHOCaVapAqcaUehtj80fVgeoOLILkCGRQLIfrVo20vscWGrUhBjbmJr9OxfPGyBtv31DjAjCMwUIkNmDyGn1aLdLfZcWG7HqNldDI4AbVOM/fU92l0gQDEy5LgUHBOjfcBTFWPGC8I5Ak0XIMegkKNF3MiwSAB5FqMd7dkH3u660ptvGIUotWra7mBTR6BjFSBAm6SC6MiQ41JgSbg1fVjVY12QNq5hcvRQfjNT1Z/99YjusmygezS4DDkuBWYYU3K00YBU5WjHqnZcGAf5mejt2NMqv66SKfbnacPw9uftyP0f0D2KDIsYxgfXGG5tsWPVNEFOswrSKipHq8iFb0lvrv1xWsV7UHz252HHnvbnBeB+96jTMmQYH7h3tGNEq6hSkrT3GE06qaPWA5lrUrJkq7K0X8d+vVSFZ7+PVa+p39s2vqSkZ3989seZr/s+gGTqeBQZ8hAwcNRqAkrJMhVrRDFJHZLu0plWsZnE3pFkyWT779/xc+zXSf2aVrGmfq//396dFjsKRFEAjoRIQMJIQAISkIAEJCABCZGAhEiIBBzct3VNvX1/pJv+vqrze3bO9HLBFifePbq/MjzaLgUoyun3u0AZ+tQTgE8zKcOUKYAq4C0zytC4BYAxCmXo24cAvlGoDJ0fAjgnVIbODwGcEypD84cA5gmVoflDAPOE+Zehzz0BeO/oURnmkz7qBuC9o8rQhRoAF2aUoQs1AIkLM8rw6A01fwpgvs1BGfogMIAP9SpDN0wB3BxVhm6YArg5qgwLyhg1A1CEyjBlju8CoL/NQRkqRABFqAyNXAD4SK8yVIgAZgmVoUIEUITK0FA+gM8xKUOFCGCoXhkqRABFqAwVIoAiVIYKEUARKkOFCKAIlaFCBFCEylAhAihCZagQARShMlSIAIVavluEylAhngPAK9ZKjTL0LlMARagMFSLA9NvPRGWoEOcA8GFeZSh3hQigCJWhDAGQpzVd/jvIFmUofQDk5aIIlaFZRKBShumVoVlEgFkRKsNcbpousT2AMbdnojKUKbYDuCjT5fo8VIbSO0d8ALgoowydI17iDoCXbStD54gAzgeVoYwB4HxQGUp0zhF/AMwPNnt5HipDacwj/gf44oQytG0KYFtUGUr7xrYpwFLbtqgydNv0FABuiypDicEqEWpmiF4Ziss1wGSIXhmKyzVQ82qwrfV5pwzFJ6GA05dWg6IMrRIBq0FRhlaJSxQMcDaoDMWNU+D8e6tBUYbSmEssCqx/NzcoylDah3MHwFtkRBnKmN3WKXDxTtHay1BsnYItURdklKFcMe3VZhOBOa8tUVGG0ts6hc0sbokqQ8k3R+eJ8Ofngr1njTKUckpxDuA3zwWHMp8HogylUYrwhMsxogzdPAWUoChDadPBP6AERRkqRdunoARFGcqrZ4qgBEUZilJcox4YkRhqLEFRhmJOEc5fmRMUZSjS7+g1b3DyxhhRhuKyDbWeB07eHSrKUH77XHF8OGsBW6GiDEW6zIb4YU07GP+u8W9ClKFYLQ5Wi1fEYhUoOZWhyL+NxzMwFpH1WaAoQ5HOpZs/oAAn26CiDKXUucX+h+eLOAfc5UiEKENRjGvwDivA2gpQlKHYSnX5hvPD2I4tUFGG4vLN4PNS1VjTDkHvEowoQ5HXc0yrxsmqcX+rv+9vf4ooQzHL2NtSLbL8ptt0vgwhylDk99M8WjmeIxe2PRcrP1GGItd/mfhg9biZJf1npHfpRZShSDkFucR3sO6v+ESUoUiTSnJ8VJJrcHm0zTncpq3znE+UoYi0KWPKkrLuqOxOjwvPSk/ku2UoYlXZpjIZH68wH+Wy0U3N5VGmRz+f7tHP8yAiuZWhiLRfiFWbyEa5AUQqusvJSJh0AAAAAElFTkSuQmCC"
    width="40"
  />
);

export const Overview: Story<EntryCardProps> = () => {
  return (
    <>
      <Flex flexWrap="wrap">
        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Default
          </SectionHeading>

          <EntryCard
            icon={icons.Clock}
            thumbnail={thumbnail}
            title="Forma 36"
            type="Design system"
          >
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </EntryCard>
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Hover
          </SectionHeading>

          <EntryCard
            actions={
              <DropdownList>
                <DropdownListItem>Copy</DropdownListItem>
                <DropdownListItem>Delete</DropdownListItem>
              </DropdownList>
            }
            isHovered
            thumbnail={thumbnail}
            title="Forma 36"
            type="Design system"
          >
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </EntryCard>
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Focus
          </SectionHeading>
          <EntryCard
            isFocused
            status="changed"
            thumbnail={thumbnail}
            title="Forma 36"
            type="Design system"
          >
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </EntryCard>
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Selected
          </SectionHeading>

          <EntryCard
            isSelected
            thumbnail={thumbnail}
            title="Forma 36"
            type="Design system"
            withDragHandle
          >
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </EntryCard>
        </Flex>
      </Flex>
    </>
  );
};
