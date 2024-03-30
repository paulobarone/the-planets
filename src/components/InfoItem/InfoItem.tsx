import { InfoItemContainer, InfoName, InfoValue } from './InfoItem.style'

interface InfoItemProps {
  infoName: string;
  infoValue: string;
}

export default function InfoItem({ infoName, infoValue }: InfoItemProps) {
  return (
    <InfoItemContainer>
      <InfoName>{infoName}</InfoName>
      <InfoValue>{infoValue}</InfoValue>
    </InfoItemContainer>
  )
}