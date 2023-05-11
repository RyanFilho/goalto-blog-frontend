interface MessageProps{
  text: String
}

export function Content({ text }: MessageProps) {
  return <p className="text">
          { text }
        </p>;
}
  