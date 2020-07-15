import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class AccordionExampleFluid extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion fluid>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Aplicar multa
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          Opcion 1
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Mover o copiar empleado
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          Opcion 2
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Desincorporar modelo?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          Opcion 3
        </Accordion.Content>
      </Accordion>
    )
  }
}
