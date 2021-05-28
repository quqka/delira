import path from 'path'
import fs from 'fs'
// import matter from 'gray-matter'

const storyDirectory: string = path.join(process.cwd(), 'story')
export function getSortedStoryData(): string[] {
  // Get file names under /storys
  const fileNames: string[] = fs.readdirSync(storyDirectory)
  const allStorysData: any[] = fileNames.map(fileName => {
    // Remove ".md" from file name to get sid
    const sid: string = fileName.replace(/\.json$/, '')
    // Read markdown file as string
    const fullPath: string = path.join(storyDirectory, fileName)
    const fileContents: string = fs.readFileSync(fullPath, 'utf8')
    const matterResult: JSON = JSON.parse(fileContents.toString())
    // Use gray-matter to parse the story metadata section
    // const matterResult = matter(fileContents)
    // Combine the data with the sid
    return {
      sid,
      ...matterResult
    }
  })
  // Sort storys by date
  return allStorysData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllStoryIds(): any {
  const fileNames: string[] = fs.readdirSync(storyDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        sid: fileName.replace(/\.json$/, '')
      }
    }
  })
}

export function getStoryData(sid: string): any {
  const fullPath: string = path.join(storyDirectory, `${sid}.json`)
  const fileContents: string = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the story metadata section
  // const matterResult = matter(fileContents)
  const matterResult: JSON = JSON.parse(fileContents.toString())

  // Combine the data with the sid
  return {
    sid,
    ...matterResult
  }
}
