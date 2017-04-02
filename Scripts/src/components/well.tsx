import * as React from "react";
import { Button } from 'office-ui-fabric-react/lib/Button';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

export interface IWellProps {
    text: string
}

export class Well extends React.Component<IWellProps, {}>{

    render() {
        return (
            <div>{this.props.text}
                <Button>Iam a button</Button>
        <CommandBar
          isSearchBoxVisible={true}
          searchPlaceholderText='Search...'
          elipisisAriaLabel='More options'
          items={
          [
            {
              key: 'newItem',
              icon: 'Add',
              name: 'New'
            },
            {
              key: 'upload',
              icon: 'upload',
              name: 'Upload'
            },
            {
              key: 'upload2',
              icon: 'upload',
              name: 'Upload'
            },
            {
              key: 'upload3',
              icon: 'upload',
              name: 'Upload'
            },
            {
              key: 'upload4',
              icon: 'upload',
              name: 'Upload'
            },
            {
              key: 'upload5',
              icon: 'upload',
              name: 'Upload'
            },
            {
              key: 'upload6',
              icon: 'upload',
              name: 'Upload'
            },
            {
              key: 'upload7',
              icon: 'upload',
              name: 'Upload'
            },
            {
              key: 'upload8',
              icon: 'upload',
              name: 'Upload'
            }
          ]
        }
          farItems={
          [
            {
              key: 'newItem',
              icon: 'Add',
              name: 'New'
            },
            {
              key: 'upload',
              icon: 'upload',
              name: 'Upload',
              items: [
                  {
                      key: 'test',
                      icon:'upload',
                      name:'Test'
                  }
              ]
            }
          ]
        } className="commandBarCss"
        />
            </div>
        )
    }
}