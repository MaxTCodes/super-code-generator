import vscode from 'vscode'
import * as changeCase from 'change-case'
import { lowerCase } from 'lower-case'
import wrapInTemplateLiteral, {
  WrapInTemplateLiteralProps,
  WrapInTemplateLiteralReturn,
} from './wrapInTemplateLiteral'
import addEmptyTemplateLiteral from './addEmptyTemplateLiteral'

export type SuperCodeGeneratorHelpersProps = {
  changeCase: typeof changeCase & { lowerCase: typeof lowerCase }
  wrapInTemplateLiteral: (
    props: WrapInTemplateLiteralProps,
  ) => WrapInTemplateLiteralReturn
  addEmptyTemplateLiteral: any
  vscode: typeof vscode
}

const helpers: SuperCodeGeneratorHelpersProps = {
  changeCase: {
    ...changeCase,
    lowerCase,
  },
  wrapInTemplateLiteral,
  addEmptyTemplateLiteral,
  vscode,
}

export default helpers
