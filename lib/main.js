import fileType from 'magic-bytes.js'
import isSvg from 'is-svg'

function svgMime(uint8Array){
  // 使用TextDecoder将Uint8Array转换为UTF-8字符串
  const textDecoder = new TextDecoder('utf-8');
  const utf8String = textDecoder.decode(uint8Array);
  return isSvg(utf8String) ? {
    extensions: "svg",
    typename: "svg",
    mime: "image/svg+xml"
  } : false
}

export default function imageMime(uint8Array){
  const result = fileType(uint8Array).sort((a,b)=>b.mime.includes('image') || b.mime.includes('xml'))[0]

  if (result?.typename == "xml") {
    return svgMime(uint8Array) || result
  } else {
    return result || svgMime(uint8Array) || {
      extensions: "png",
      typename: "png",
      mime: "image/png"
    }
  }
}

