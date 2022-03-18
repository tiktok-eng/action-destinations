import type appboy from '@braze/web-sdk'
import type { BrowserActionDefinition } from '../../../lib/browser-destinations'
import type { Settings } from '../generated-types'
import type { Payload } from './generated-types'
export declare function resetUserCache(): void
declare const action: BrowserActionDefinition<Settings, typeof appboy, Payload>
export default action
