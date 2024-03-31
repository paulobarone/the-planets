import { useContext, useState } from 'react'
import { DesktopOption, DesktopOptions, InfosContainer, MobileOption, MobileOptions, NumberOption, OptionsMobileContainer, PlanetContainer, PlanetDescription, PlanetGeoImage, PlanetImage, PlanetImageContainer, PlanetName, PlanetResume, PlanetResumeContainer, PlanetResumeTextContainer, Source, StyledArrowForwardIosRoundedIcon, WikipediaLink } from './Planet.style'
import InfoItem from '../InfoItem/InfoItem'
import PlanetContext from '../../contexts/PlanetContext'

type CurrentOptionProps = 'overview' | 'structure' | 'surface'
type ImageMapOption = {
  image: string;
  geo?: string;
}

export default function Planet() {
  const [currentOption, setCurrentOption] = useState<CurrentOptionProps>('overview')
  const { planet } = useContext(PlanetContext)

  const imageMap: Record<CurrentOptionProps, ImageMapOption> = {
    'overview': { image: planet.overview.image },
    'structure': { image: planet.structure.image },
    'surface': { image: planet.surface.image, geo: planet.surface.geo }
  }

  const sourceMap: Record<CurrentOptionProps, string> = {
    'overview': planet.overview.source,
    'structure': planet.structure.source,
    'surface': planet.surface.source
  }

  const descriptionMap: Record<CurrentOptionProps, string> = {
    'overview': planet.overview.content,
    'structure': planet.structure.content,
    'surface': planet.surface.content
  }

  return (
    <PlanetContainer>
      <OptionsMobileContainer>
        <MobileOptions>
          <MobileOption $color={planet.sectionColor} $active={currentOption === 'overview'} onClick={() => setCurrentOption('overview')}>Overview</MobileOption>
          <MobileOption $color={planet.sectionColor} $active={currentOption === 'structure'} onClick={() => setCurrentOption('structure')}>Structure</MobileOption>
          <MobileOption $color={planet.sectionColor} $active={currentOption === 'surface'} onClick={() => setCurrentOption('surface')}>Surface</MobileOption>
        </MobileOptions>
      </OptionsMobileContainer>
      <PlanetResumeContainer>
        <PlanetImageContainer>
        <PlanetImage src={imageMap[currentOption].image} alt={planet.name} />
        {currentOption === 'surface' && imageMap[currentOption].geo && (
          <PlanetGeoImage src={imageMap[currentOption].geo} alt={planet.name} />
        )}
        </PlanetImageContainer>
        <PlanetResume>
          <PlanetResumeTextContainer>
            <PlanetName>Mercury</PlanetName>
            <PlanetDescription>
              {descriptionMap[currentOption]}
            </PlanetDescription>
            <Source>Source: 
              <WikipediaLink href={sourceMap[currentOption]} target='_blank'>
                Wikipedia 
                <StyledArrowForwardIosRoundedIcon />
              </WikipediaLink>
            </Source>
          </PlanetResumeTextContainer>
          <DesktopOptions>
            <DesktopOption $color={planet.sectionColor} $active={currentOption === 'overview'} onClick={() => setCurrentOption('overview')}>
              <NumberOption $active={currentOption === 'overview'}>01</NumberOption>
              Overview
            </DesktopOption>
            <DesktopOption $color={planet.sectionColor} $active={currentOption === 'structure'} onClick={() => setCurrentOption('structure')}>
              <NumberOption $active={currentOption === 'structure'}>02</NumberOption>
              Structure
            </DesktopOption>
            <DesktopOption $color={planet.sectionColor} $active={currentOption === 'surface'} onClick={() => setCurrentOption('surface')}>
              <NumberOption $active={currentOption === 'surface'}>03</NumberOption>
              Surface
            </DesktopOption>
          </DesktopOptions>
        </PlanetResume>
      </PlanetResumeContainer>
      <InfosContainer>
        {planet.info.map((item: { name: string; value: string }, index: number) => (
          <InfoItem infoName={item.name} infoValue={item.value} key={index} />
        ))}
      </InfosContainer>
    </PlanetContainer>
  )
}