export const coursesData = {
  'learning-swiftui': {
    id: 'learning-swiftui',
    title: 'Learning SwiftUI',
    description: 'Master the art of creating beautiful iOS interfaces with SwiftUI. From basic views to complex animations.',
    level: 1,
    lessons: 24,
    practice: 85,
    category: 'iOS Development',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6',
    chapters: [
      {
        id: 'swiftui-views',
        title: 'SwiftUI Views',
        lessons: [
          {
            id: 'text-and-modifiers',
            title: 'Text & Modifiers',
            description: 'Learn to create and style text in SwiftUI with powerful modifiers.',
            completed: false,
            content: {
              visualization: {
                analogy: "Think of Text modifiers like applying makeup layers 💄 - each modifier adds a new layer of style without changing the base text",
                explanation: "Just like makeup, modifiers are applied in sequence and each one builds upon the previous effect. You start with bare text (like a clean face) and add layers: font style (foundation), color (blush), background (highlighter), and padding (contouring). The order matters - applying foundation after lipstick would be messy!",
                image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3",
                visualTips: [
                  "🎨 Modifiers chain like beauty filters - each one transforms the previous result",
                  "📏 Font styles are like clothing sizes - they scale appropriately for different contexts", 
                  "🌈 Colors flow like paint on canvas - foreground colors the text, background colors the container",
                  "📦 Padding is like adding cushioning around a fragile package",
                  "✨ Remember: read modifiers from inside-out, like peeling an onion!"
                ]
              },
              theory: `
                <h2>Text & Modifiers in SwiftUI</h2>
                <p>Text is the foundation of any user interface. In SwiftUI, Text views are incredibly powerful and customizable through modifiers.</p>
                
                <h3>Basic Text Creation</h3>
                <p>Creating text in SwiftUI is simple and elegant:</p>
                
                <pre><code>
Text("Hello, SwiftUI!")
                </code></pre>
                
                <h3>Text Modifiers</h3>
                <p>Modifiers transform your text appearance and behavior. They can be chained together for complex styling:</p>
                
                <pre><code>
Text("Welcome to iOS Development")
    .font(.largeTitle)
    .fontWeight(.bold)
    .foregroundColor(.blue)
    .padding()
    .background(Color.gray.opacity(0.1))
    .cornerRadius(10)
                </code></pre>
                
                <div class="example-box">
                  <h4>Visual Result</h4>
                  <p>This creates a large, bold blue title with a light gray background and rounded corners.</p>
                </div>
                
                <h3>Font Styles</h3>
                <p>SwiftUI provides semantic font styles that adapt to user preferences:</p>
                <ul>
                  <li><code>.largeTitle</code> - Largest heading style</li>
                  <li><code>.title</code> - Standard title</li>
                  <li><code>.headline</code> - Emphasis text</li>
                  <li><code>.body</code> - Regular body text</li>
                  <li><code>.caption</code> - Small descriptive text</li>
                </ul>
                
                <h3>Color and Styling</h3>
                <pre><code>
Text("Colorful Text")
    .foregroundColor(.red)
    .background(Color.yellow)
    .italic()
    .strikethrough()
    .underline()
                </code></pre>
                
                <h3>Multi-line Text</h3>
                <pre><code>
Text("This is a very long text that will automatically wrap to multiple lines when the container is too narrow")
    .lineLimit(nil)
    .multilineTextAlignment(.center)
                </code></pre>
                
                <div class="example-box">
                  <h4>Pro Tip</h4>
                  <p>Use <code>.lineLimit(nil)</code> to allow unlimited lines, or specify a number to truncate text.</p>
                </div>
              `,
              practice: [
                {
                  id: 1,
                  question: "What modifier would you use to make text bold in SwiftUI?",
                  options: [
                    ".bold()",
                    ".fontWeight(.bold)",
                    ".weight(.bold)",
                    ".textStyle(.bold)"
                  ],
                  correct: 1,
                  explanation: ".fontWeight(.bold) is the correct modifier to make text bold. You can also use .fontWeight(.medium), .fontWeight(.semibold), etc."
                },
                {
                  id: 2,
                  question: "Which font style would be best for a main screen title?",
                  options: [
                    ".caption",
                    ".body",
                    ".largeTitle",
                    ".footnote"
                  ],
                  correct: 2,
                  explanation: ".largeTitle is designed for main titles and headlines. It's the largest semantic font style in SwiftUI."
                },
                {
                  id: 3,
                  question: "How do you center-align multi-line text?",
                  options: [
                    ".textAlignment(.center)",
                    ".multilineTextAlignment(.center)",
                    ".alignment(.center)",
                    ".centerText()"
                  ],
                  correct: 1,
                  explanation: ".multilineTextAlignment(.center) is used specifically for aligning text across multiple lines."
                }
              ]
            }
          },
          {
            id: 'stacks-and-layout',
            title: 'Stacks & Layout',
            description: 'Master VStack, HStack, and ZStack through building a real Instagram-like photo app.',
            completed: false,
            content: {
              visualization: {
                analogy: "Think of SwiftUI Stacks like organizing your desk 🗂️ - VStack is stacking papers vertically, HStack is arranging items side by side, and ZStack is layering transparencies on top of each other",
                explanation: "Just like organizing a workspace, each stack type serves a specific purpose: VStack creates vertical flows (like reading a document top to bottom), HStack creates horizontal flows (like tools on a toolbar), and ZStack creates layered compositions (like placing a sticky note on top of a document). The magic happens when you combine them - like creating organized filing systems with folders, tabs, and labels all working together!",
                image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
                visualTips: [
                  "📚 VStack = Stacking books on a shelf (gravity pulls items down)",
                  "🃏 HStack = Arranging playing cards in your hand (side by side)",
                  "📄 ZStack = Layering transparent sheets (each layer sits on top)",
                  "🏗️ Nested stacks = Building complex furniture from simple pieces",
                  "⚖️ Alignment is like choosing where to place your anchor point!"
                ]
              },
              theory: `
                <h2>🏗️ Building PhotoShare: A Real Instagram-Style App</h2>
                <p><strong>Today we're building a complete photo-sharing app called "PhotoShare" to master SwiftUI layout systems.</strong></p>
                
                <div class="example-box">
                  <h4>🎯 What We're Building</h4>
                  <p>A photo sharing app where users can view a feed of photos with likes, comments, and user profiles - just like Instagram's core functionality.</p>
                </div>
                
                <h3>🏛️ Complete MVVM Architecture Overview</h3>
                <p><strong>Before we write ANY code, let's visualize our complete app architecture:</strong></p>
                
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 12px; color: white; margin: 20px 0;">
                  <h4 style="color: white; margin-bottom: 15px;">📐 PhotoShare MVVM Architecture</h4>
                  
                  <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <strong>🗂️ MODEL LAYER (Data + Logic)</strong><br/>
                    📄 <strong>PhotoPost.swift</strong> - Represents a photo with user, image, likes, comments<br/>
                    📄 <strong>User.swift</strong> - User profile with name, avatar, follower count<br/>
                    📄 <strong>Comment.swift</strong> - Individual comment with text and timestamp
                  </div>
                  
                  <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <strong>🧠 VIEWMODEL LAYER (Business Logic + State)</strong><br/>
                    📄 <strong>PhotoFeedViewModel.swift</strong> - Manages collection of posts, loading states<br/>
                    📄 <strong>UserProfileViewModel.swift</strong> - Handles user data and profile updates
                  </div>
                  
                  <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <strong>📱 VIEW LAYER (User Interface)</strong><br/>
                    📄 <strong>PhotoFeedView.swift</strong> - Main feed scroll view<br/>
                    📄 <strong>PhotoPostCardView.swift</strong> - Individual post card component<br/>
                    📄 <strong>UserProfileHeaderView.swift</strong> - Profile section in each post
                  </div>
                </div>
                
                <h3>🧠 Raw Developer Thinking Process</h3>
                <p><strong>Let me think through this like a real developer would...</strong></p>
                
                <div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #007acc; margin: 20px 0; font-style: italic;">
                  <p><strong>🤔 "Okay, so I need to build a photo feed. What does each post need?"</strong></p>
                  <p>• A user profile section at the top (avatar + username)<br/>
                  • The main photo image<br/>
                  • Action buttons (like, comment, share)<br/>
                  • Like count and caption text<br/>
                  • Maybe some recent comments...</p>
                  
                  <p><strong>"How should I arrange these elements?"</strong></p>
                  <p>• Definitely need a VStack for the main vertical flow<br/>
                  • The profile header needs an HStack (avatar next to username)<br/>
                  • Action buttons need an HStack (side by side)<br/>
                  • For the photo and action buttons, I might need a ZStack for floating elements...</p>
                  
                  <p><strong>"Let me sketch this out first..."</strong></p>
                </div>
                
                <h3>📐 Visual UI Planning (Before Any Code!)</h3>
                <p><strong>Here's how I would sketch out a PhotoPost card:</strong></p>
                
                <div style="background: white; border: 2px solid #e1e5e9; border-radius: 12px; padding: 20px; margin: 20px 0;">
                  <div style="text-align: center; color: #666; margin-bottom: 15px;">
                    <strong>📱 PhotoPost Card Layout Sketch</strong>
                  </div>
                  
                  <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; background: #fafafa;">
                    <div style="display: flex; align-items: center; margin-bottom: 10px; padding: 8px; background: white; border-radius: 6px;">
                      <div style="width: 40px; height: 40px; border-radius: 50%; background: #007acc; margin-right: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;">👤</div>
                      <div>
                        <div style="font-weight: bold; font-size: 14px;">username</div>
                        <div style="font-size: 12px; color: #666;">2 hours ago</div>
                      </div>
                    </div>
                    
                    <div style="width: 100%; height: 200px; background: linear-gradient(45deg, #ff6b6b, #4ecdc4); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; margin-bottom: 10px;">
                      📸 PHOTO IMAGE
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; padding: 8px; background: white; border-radius: 6px; margin-bottom: 8px;">
                      <div style="display: flex; gap: 15px;">
                        <span>❤️ Like</span>
                        <span>💬 Comment</span>
                        <span>📤 Share</span>
                      </div>
                      <span>🔖 Save</span>
                    </div>
                    
                    <div style="padding: 8px; background: white; border-radius: 6px;">
                      <div style="font-weight: bold; margin-bottom: 5px;">1,234 likes</div>
                      <div><strong>username</strong> This is an amazing sunset from my trip! #photography #travel</div>
                    </div>
                  </div>
                </div>
                
                <h3>🏗️ Breaking Down the Layout Architecture</h3>
                <p><strong>Now let's architect this step-by-step, identifying each stack type and why we need it:</strong></p>
                
                <div class="example-box">
                  <h4>🎯 Layout Strategy Analysis</h4>
                  <p><strong>Main Structure:</strong> VStack (vertical flow from top to bottom)</p>
                  <p><strong>Profile Header:</strong> HStack (avatar beside username)</p>
                  <p><strong>Action Buttons:</strong> HStack (buttons side by side)</p>
                  <p><strong>Photo + Floating Elements:</strong> ZStack (overlay effects)</p>
                </div>
                
                <h3>🔨 Component 1: The Profile Header (HStack Mastery)</h3>
                <p><strong>Let's build the user profile header first. Here's my thinking process:</strong></p>
                
                <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <p><strong>🤔 Developer Thinking:</strong> "I need the avatar image on the left, then username and timestamp on the right. That's clearly an HStack with the avatar, then a VStack for the text elements."</p>
                </div>
                
                <pre><code>
struct UserProfileHeader: View {
    let user: User
    let timestamp: String
    
    var body: some View {
        HStack(alignment: .center, spacing: 12) {
            // Profile Avatar (Left)
            AsyncImage(url: URL(string: user.avatarURL)) { image in
                image
                    .resizable()
                    .aspectRatio(contentMode: .fill)
            } placeholder: {
                Image(systemName: "person.circle.fill")
                    .foregroundColor(.gray)
            }
            .frame(width: 40, height: 40)
            .clipShape(Circle())
            
            // Username and Time (Right)
            VStack(alignment: .leading, spacing: 2) {
                Text(user.username)
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundColor(.primary)
                
                Text(timestamp)
                    .font(.system(size: 12))
                    .foregroundColor(.secondary)
            }
            
            Spacer() // Pushes everything to the left
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 8)
    }
}
                </code></pre>
                
                <div class="example-box">
                  <h4>🧠 Why These Design Decisions?</h4>
                  <p><strong>HStack alignment: .center</strong> - Vertically centers avatar with text block</p>
                  <p><strong>VStack alignment: .leading</strong> - Left-aligns username and timestamp</p>
                  <p><strong>Spacer()</strong> - Pushes content to left edge (Instagram-style)</p>
                  <p><strong>AsyncImage</strong> - Handles network image loading with placeholder</p>
                </div>
                
                <h3>🔨 Component 2: Action Buttons Bar (HStack + Spacer Strategy)</h3>
                <p><strong>Now the action buttons row. Let me think this through...</strong></p>
                
                <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <p><strong>🤔 Developer Thinking:</strong> "Instagram has like/comment/share on the left, and save bookmark on the right. I need an HStack with the left buttons grouped, then a Spacer(), then the save button."</p>
                </div>
                
                <pre><code>
struct ActionButtonsBar: View {
    @State private var isLiked = false
    let likeCount: Int
    
    var body: some View {
        HStack(spacing: 16) {
            // Left side buttons
            HStack(spacing: 16) {
                Button(action: { isLiked.toggle() }) {
                    Image(systemName: isLiked ? "heart.fill" : "heart")
                        .foregroundColor(isLiked ? .red : .primary)
                        .font(.system(size: 22))
                }
                
                Button(action: { /* Handle comment */ }) {
                    Image(systemName: "bubble.right")
                        .foregroundColor(.primary)
                        .font(.system(size: 22))
                }
                
                Button(action: { /* Handle share */ }) {
                    Image(systemName: "paperplane")
                        .foregroundColor(.primary)
                        .font(.system(size: 22))
                }
            }
            
            Spacer() // Creates space between left and right buttons
            
            // Right side save button
            Button(action: { /* Handle save */ }) {
                Image(systemName: "bookmark")
                    .foregroundColor(.primary)
                    .font(.system(size: 22))
            }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 8)
    }
}
                </code></pre>
                
                <h3>🔨 Component 3: Complete Photo Post Card (VStack Architecture)</h3>
                <p><strong>Now let's combine everything into the main card structure:</strong></p>
                
                <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <p><strong>🤔 Developer Thinking:</strong> "The main card flows vertically: header at top, then photo, then actions, then caption. That's a clear VStack structure. The photo might need special treatment..."</p>
                </div>
                
                <pre><code>
struct PhotoPostCard: View {
    let post: PhotoPost
    
    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            // 1. Profile Header
            UserProfileHeader(
                user: post.user, 
                timestamp: post.timeAgo
            )
            
            // 2. Photo Image with ZStack for overlays
            ZStack(alignment: .topTrailing) {
                AsyncImage(url: URL(string: post.imageURL)) { image in
                    image
                        .resizable()
                        .aspectRatio(contentMode: .fill)
                } placeholder: {
                    Rectangle()
                        .fill(Color.gray.opacity(0.3))
                        .overlay(
                            ProgressView()
                        )
                }
                .frame(maxHeight: 400)
                .clipped()
                
                // Optional: Floating more options button
                Button(action: { /* Show options */ }) {
                    Image(systemName: "ellipsis")
                        .foregroundColor(.white)
                        .padding(8)
                        .background(Color.black.opacity(0.5))
                        .clipShape(Circle())
                }
                .padding(.trailing, 12)
                .padding(.top, 12)
            }
            
            // 3. Action Buttons
            ActionButtonsBar(likeCount: post.likesCount)
            
            // 4. Like Count and Caption
            VStack(alignment: .leading, spacing: 4) {
                if post.likesCount > 0 {
                    Text("\\(post.likesCount) likes")
                        .font(.system(size: 14, weight: .semibold))
                }
                
                HStack(alignment: .top, spacing: 4) {
                    Text(post.user.username)
                        .font(.system(size: 14, weight: .semibold))
                    Text(post.caption)
                        .font(.system(size: 14))
                        .multilineTextAlignment(.leading)
                }
                
                if post.commentsCount > 0 {
                    Text("View all \\(post.commentsCount) comments")
                        .font(.system(size: 14))
                        .foregroundColor(.secondary)
                }
            }
            .padding(.horizontal, 16)
            .padding(.bottom, 16)
        }
        .background(Color(.systemBackground))
        .cornerRadius(0) // Instagram style - no rounded corners
    }
}
                </code></pre>
                
                <h3>💡 Memory Model & Performance Insights</h3>
                <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 15px; margin: 15px 0;">
                  <h4>🧠 Memory Management in Our Layout</h4>
                  <p><strong>VStack/HStack/ZStack are structs (value types)</strong> - They live on the stack and are copied when passed around, making them very efficient.</p>
                  
                  <p><strong>AsyncImage uses internal caching</strong> - Downloaded images are automatically cached in memory to prevent re-downloading.</p>
                  
                  <p><strong>@State for isLiked</strong> - Stored in the View's memory, triggers UI re-render when changed.</p>
                </div>
                
                <h3>🎯 Why These Stack Choices?</h3>
                <div class="example-box">
                  <h4>🏗️ Architectural Decisions Explained</h4>
                  <p><strong>VStack for main card:</strong> Natural top-to-bottom reading flow</p>
                  <p><strong>HStack for profile header:</strong> Avatar beside text (left-to-right)</p>
                  <p><strong>ZStack for photo:</strong> Allows floating buttons over image</p>
                  <p><strong>HStack for actions:</strong> Buttons in a horizontal row</p>
                  <p><strong>VStack for caption area:</strong> Multiple lines of text vertically</p>
                </div>
                
                <h3>🚀 Building the Complete Feed View</h3>
                <p><strong>Finally, let's create the scrolling feed that contains all our photo cards:</strong></p>
                
                <pre><code>
struct PhotoFeedView: View {
    @StateObject private var viewModel = PhotoFeedViewModel()
    
    var body: some View {
        NavigationView {
            ScrollView(.vertical, showsIndicators: false) {
                LazyVStack(spacing: 0) {
                    ForEach(viewModel.posts) { post in
                        PhotoPostCard(post: post)
                        
                        Divider()
                            .padding(.vertical, 8)
                    }
                }
            }
            .navigationTitle("PhotoShare")
            .refreshable {
                await viewModel.loadPosts()
            }
        }
    }
}
                </code></pre>
                
                <div class="example-box">
                  <h4>🎯 Pro Tips for Production Apps</h4>
                  <p><strong>LazyVStack instead of VStack:</strong> Only renders visible posts (crucial for performance)</p>
                  <p><strong>ScrollView with .refreshable:</strong> Pull-to-refresh functionality</p>
                  <p><strong>showsIndicators: false:</strong> Hides scroll bar for cleaner look</p>
                  <p><strong>ForEach with Identifiable:</strong> Efficient list updates and animations</p>
                </div>
              `,
              practice: [
                {
                  id: 1,
                  question: "In our PhotoShare app, why did we use HStack for the profile header instead of VStack?",
                  options: [
                    "HStack is faster than VStack",
                    "We need the avatar and username side-by-side horizontally",
                    "HStack handles images better",
                    "Apple recommends always using HStack first"
                  ],
                  correct: 1,
                  explanation: "HStack arranges views horizontally (left to right), which is perfect for placing an avatar image next to the username text, just like Instagram's design pattern."
                },
                {
                  id: 2,
                  question: "What's the primary reason we used ZStack for the photo section?",
                  options: [
                    "ZStack loads images faster",
                    "To layer the options button on top of the photo image",
                    "ZStack prevents memory leaks",
                    "Apple requires ZStack for images"
                  ],
                  correct: 1,
                  explanation: "ZStack layers views on top of each other (z-axis), allowing us to overlay the floating options button on top of the photo image, creating the layered effect common in social media apps."
                },
                {
                  id: 3,
                  question: "In our ActionButtonsBar, what does Spacer() accomplish between the left and right button groups?",
                  options: [
                    "It adds a fixed 20px gap",
                    "It centers all the buttons",
                    "It pushes the left buttons to the left edge and right button to the right edge",
                    "It makes the buttons bigger"
                  ],
                  correct: 2,
                  explanation: "Spacer() expands to fill all available space in the HStack, effectively pushing the like/comment/share buttons to the left side and the save button to the right side, recreating Instagram's layout pattern."
                },
                {
                  id: 4,
                  question: "Why did we choose LazyVStack instead of regular VStack for the main feed?",
                  options: [
                    "LazyVStack looks better visually",
                    "LazyVStack only renders visible posts, improving performance with large feeds",
                    "LazyVStack is required for ScrollView",
                    "LazyVStack handles images automatically"
                  ],
                  correct: 1,
                  explanation: "LazyVStack only creates and renders the views that are currently visible on screen. For a social media feed with potentially thousands of posts, this prevents memory issues and improves scrolling performance dramatically."
                }
              ]
            }
          },
          {
            id: 'images-and-symbols',
            title: 'Images & SF Symbols',
            description: 'Work with images, icons, and Apple\'s SF Symbols system.',
            completed: false,
            content: {
              theory: `
                <h2>Images & SF Symbols in SwiftUI</h2>
                <p>Visual elements are crucial for creating engaging iOS apps. SwiftUI provides powerful tools for working with images and Apple's extensive SF Symbols library.</p>
                
                <h3>Basic Image Display</h3>
                <p>Display images from your app bundle:</p>
                
                <pre><code>
Image("my-image")
    .resizable()
    .aspectRatio(contentMode: .fit)
    .frame(width: 200, height: 200)
                </code></pre>
                
                <h3>SF Symbols</h3>
                <p>Apple's SF Symbols provide thousands of professionally designed icons:</p>
                
                <pre><code>
Image(systemName: "heart.fill")
    .foregroundColor(.red)
    .font(.largeTitle)
                </code></pre>
                
                <div class="example-box">
                  <h4>Popular SF Symbols</h4>
                  <ul>
                    <li><code>heart.fill</code> - Filled heart</li>
                    <li><code>star.fill</code> - Filled star</li>
                    <li><code>person.circle</code> - Person in circle</li>
                    <li><code>magnifyingglass</code> - Search icon</li>
                    <li><code>gear</code> - Settings gear</li>
                    <li><code>plus.circle.fill</code> - Add button</li>
                  </ul>
                </div>
                
                <h3>Image Modifiers</h3>
                <p>Transform images with powerful modifiers:</p>
                
                <pre><code>
Image("profile-photo")
    .resizable()
    .scaledToFill()
    .frame(width: 80, height: 80)
    .clipShape(Circle())
    .overlay(
        Circle()
            .stroke(Color.blue, lineWidth: 2)
    )
                </code></pre>
                
                <h3>Styling SF Symbols</h3>
                <pre><code>
HStack(spacing: 20) {
    Image(systemName: "heart")
        .font(.title)
        .foregroundColor(.gray)
    
    Image(systemName: "heart.fill")
        .font(.title)
        .foregroundColor(.red)
    
    Image(systemName: "heart.circle.fill")
        .font(.title)
        .foregroundColor(.pink)
}
                </code></pre>
                
                <h3>Async Image Loading</h3>
                <p>Load images from URLs with AsyncImage:</p>
                
                <pre><code>
AsyncImage(url: URL(string: "https://example.com/image.jpg")) { image in
    image
        .resizable()
        .aspectRatio(contentMode: .fit)
} placeholder: {
    ProgressView()
}
.frame(width: 200, height: 200)
                </code></pre>
                
                <h3>Creating Icon Buttons</h3>
                <pre><code>
Button(action: {
    // Handle like action
}) {
    Image(systemName: isLiked ? "heart.fill" : "heart")
        .foregroundColor(isLiked ? .red : .gray)
        .font(.title2)
}
                </code></pre>
                
                <h3>Image with Text Overlay</h3>
                <pre><code>
ZStack(alignment: .bottomLeading) {
    Image("landscape")
        .resizable()
        .aspectRatio(contentMode: .fill)
        .frame(height: 200)
        .clipped()
    
    VStack(alignment: .leading) {
        Text("Beautiful Sunset")
            .font(.headline)
            .foregroundColor(.white)
        Text("California, USA")
            .font(.caption)
            .foregroundColor(.white.opacity(0.8))
    }
    .padding()
    .background(
        LinearGradient(
            colors: [.clear, .black.opacity(0.6)],
            startPoint: .top,
            endPoint: .bottom
        )
    )
}
.cornerRadius(12)
                </code></pre>
                
                <div class="example-box">
                  <h4>Image Best Practices</h4>
                  <ul>
                    <li>Always use <code>.resizable()</code> for custom sizing</li>
                    <li>Choose between <code>.scaledToFit()</code> and <code>.scaledToFill()</code></li>
                    <li>Use <code>.clipped()</code> to prevent overflow</li>
                    <li>Prefer SF Symbols for icons and UI elements</li>
                    <li>Add accessibility labels for images</li>
                  </ul>
                </div>
              `,
              practice: [
                {
                  id: 1,
                  question: "What modifier makes an image resizable in SwiftUI?",
                  options: [
                    ".scalable()",
                    ".resizable()",
                    ".flexible()",
                    ".adjustable()"
                  ],
                  correct: 1,
                  explanation: ".resizable() is required to make an image resizable. Without it, the image displays at its original size."
                },
                {
                  id: 2,
                  question: "How do you create a circular profile image?",
                  options: [
                    ".cornerRadius(.infinity)",
                    ".clipShape(Circle())",
                    ".circular(true)",
                    ".shape(.circle)"
                  ],
                  correct: 1,
                  explanation: ".clipShape(Circle()) clips the image to a circular shape, perfect for profile photos."
                },
                {
                  id: 3,
                  question: "What's the difference between .scaledToFit() and .scaledToFill()?",
                  options: [
                    "No difference, they're the same",
                    ".scaledToFit() may leave empty space, .scaledToFill() may crop",
                    ".scaledToFit() crops, .scaledToFill() leaves space",
                    "They only affect SF Symbols"
                  ],
                  correct: 1,
                  explanation: ".scaledToFit() ensures the entire image is visible (may leave empty space), while .scaledToFill() fills the frame completely (may crop parts)."
                }
              ]
            }
          },
          {
            id: 'buttons-and-interactions',
            title: 'Buttons & Interactions',
            description: 'Create interactive buttons with custom styles and animations.',
            completed: false,
            content: {
              theory: `
                <h2>Buttons & Interactions in SwiftUI</h2>
                <p>Buttons are the primary way users interact with your app. SwiftUI makes it easy to create beautiful, responsive buttons with custom styling and animations.</p>
                
                <h3>Basic Button</h3>
                <p>The simplest button with text and action:</p>
                
                <pre><code>
Button("Tap Me") {
    print("Button tapped!")
}
                </code></pre>
                
                <h3>Button with Custom Styling</h3>
                <pre><code>
Button("Get Started") {
    // Handle action
}
.font(.headline)
.foregroundColor(.white)
.padding()
.background(Color.blue)
.cornerRadius(10)
                </code></pre>
                
                <h3>Button with Icon</h3>
                <pre><code>
Button(action: {
    // Handle action
}) {
    HStack {
        Image(systemName: "plus.circle.fill")
        Text("Add Item")
    }
    .foregroundColor(.white)
    .padding()
    .background(Color.green)
    .cornerRadius(8)
}
                </code></pre>
                
                <h3>Custom Button Styles</h3>
                <p>Create reusable button styles:</p>
                
                <pre><code>
struct PrimaryButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .padding()
            .background(Color.blue)
            .foregroundColor(.white)
            .cornerRadius(10)
            .scaleEffect(configuration.isPressed ? 0.95 : 1.0)
            .animation(.easeInOut(duration: 0.1), value: configuration.isPressed)
    }
}

// Usage
Button("Press Me") {
    // Action
}
.buttonStyle(PrimaryButtonStyle())
                </code></pre>
                
                <h3>Icon-Only Buttons</h3>
                <pre><code>
Button(action: {
    // Handle favorite
}) {
    Image(systemName: isFavorite ? "heart.fill" : "heart")
        .font(.title2)
        .foregroundColor(isFavorite ? .red : .gray)
}
.animation(.easeInOut, value: isFavorite)
                </code></pre>
                
                <h3>Floating Action Button</h3>
                <pre><code>
VStack {
    Spacer()
    HStack {
        Spacer()
        Button(action: {
            // Add new item
        }) {
            Image(systemName: "plus")
                .font(.title2)
                .foregroundColor(.white)
        }
        .frame(width: 56, height: 56)
        .background(Color.blue)
        .clipShape(Circle())
        .shadow(radius: 4)
        .padding()
    }
}
                </code></pre>
                
                <h3>Button States and Feedback</h3>
                <pre><code>
@State private var isLoading = false

Button(action: {
    isLoading = true
    // Simulate async operation
    DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
        isLoading = false
    }
}) {
    HStack {
        if isLoading {
            ProgressView()
                .scaleEffect(0.8)
        }
        Text(isLoading ? "Loading..." : "Submit")
    }
    .frame(maxWidth: .infinity)
    .padding()
    .background(isLoading ? Color.gray : Color.blue)
    .foregroundColor(.white)
    .cornerRadius(10)
}
.disabled(isLoading)
                </code></pre>
                
                <h3>Toggle Button</h3>
                <pre><code>
@State private var isSelected = false

Button(action: {
    withAnimation(.spring()) {
        isSelected.toggle()
    }
}) {
    HStack {
        Image(systemName: isSelected ? "checkmark.circle.fill" : "circle")
        Text("Select Item")
    }
    .foregroundColor(isSelected ? .green : .primary)
}
                </code></pre>
                
                <div class="example-box">
                  <h4>Button Design Tips</h4>
                  <ul>
                    <li>Make buttons large enough for easy tapping (minimum 44pt)</li>
                    <li>Use consistent styling throughout your app</li>
                    <li>Provide visual feedback on press with animations</li>
                    <li>Disable buttons during loading states</li>
                    <li>Use clear, action-oriented text labels</li>
                  </ul>
                </div>
                
                <h3>Button with Gradient Background</h3>
                <pre><code>
Button("Gradient Button") {
    // Action
}
.font(.headline)
.foregroundColor(.white)
.padding()
.background(
    LinearGradient(
        colors: [.purple, .blue],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )
)
.cornerRadius(12)
.shadow(color: .purple.opacity(0.3), radius: 5, x: 0, y: 3)
                </code></pre>
              `,
              practice: [
                {
                  id: 1,
                  question: "What's the best way to provide visual feedback when a button is pressed?",
                  options: [
                    "Change the text color only",
                    "Use scaleEffect with configuration.isPressed",
                    "Add a border",
                    "Change the background opacity"
                  ],
                  correct: 1,
                  explanation: "Using scaleEffect with configuration.isPressed in a custom ButtonStyle provides immediate visual feedback that feels responsive and native."
                },
                {
                  id: 2,
                  question: "What's the minimum recommended tap target size for iOS buttons?",
                  options: [
                    "32 points",
                    "40 points", 
                    "44 points",
                    "48 points"
                  ],
                  correct: 2,
                  explanation: "Apple's Human Interface Guidelines recommend a minimum tap target size of 44x44 points for comfortable interaction."
                },
                {
                  id: 3,
                  question: "How do you disable a button during a loading state?",
                  options: [
                    ".enabled(false)",
                    ".disabled(true)",
                    ".interactive(false)",
                    ".active(false)"
                  ],
                  correct: 1,
                  explanation: ".disabled(true) disables the button, preventing user interaction and typically changing its appearance to indicate the disabled state."
                }
              ]
            }
          },
          {
            id: 'lists-and-navigation',
            title: 'Lists & Navigation',
            description: 'Build dynamic lists and implement navigation between screens.',
            completed: false,
            content: {
              theory: `
                <h2>Lists & Navigation in SwiftUI</h2>
                <p>Lists are fundamental to iOS apps, and navigation enables users to move between screens. SwiftUI makes both incredibly intuitive and powerful.</p>
                
                <h3>Basic List</h3>
                <p>Create a simple list with static content:</p>
                
                <pre><code>
List {
    Text("Item 1")
    Text("Item 2")
    Text("Item 3")
}
                </code></pre>
                
                <h3>Dynamic Lists with Data</h3>
                <pre><code>
struct TodoItem: Identifiable {
    let id = UUID()
    let title: String
    var isCompleted: Bool
}

@State private var todos = [
    TodoItem(title: "Buy groceries", isCompleted: false),
    TodoItem(title: "Walk the dog", isCompleted: true),
    TodoItem(title: "Learn SwiftUI", isCompleted: false)
]

List(todos) { todo in
    HStack {
        Image(systemName: todo.isCompleted ? "checkmark.circle.fill" : "circle")
            .foregroundColor(todo.isCompleted ? .green : .gray)
        Text(todo.title)
            .strikethrough(todo.isCompleted)
        Spacer()
    }
}
                </code></pre>
                
                <h3>Custom List Rows</h3>
                <pre><code>
struct ContactRow: View {
    let contact: Contact
    
    var body: some View {
        HStack {
            AsyncImage(url: contact.profileImageURL) { image in
                image
                    .resizable()
                    .aspectRatio(contentMode: .fill)
            } placeholder: {
                Image(systemName: "person.circle.fill")
                    .foregroundColor(.gray)
            }
            .frame(width: 50, height: 50)
            .clipShape(Circle())
            
            VStack(alignment: .leading, spacing: 4) {
                Text(contact.name)
                    .font(.headline)
                Text(contact.email)
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            
            Spacer()
            
            if contact.isOnline {
                Circle()
                    .fill(Color.green)
                    .frame(width: 10, height: 10)
            }
        }
        .padding(.vertical, 4)
    }
}
                </code></pre>
                
                <h3>Navigation with NavigationView</h3>
                <pre><code>
NavigationView {
    List(contacts) { contact in
        NavigationLink(destination: ContactDetailView(contact: contact)) {
            ContactRow(contact: contact)
        }
    }
    .navigationTitle("Contacts")
    .navigationBarTitleDisplayMode(.large)
}
                </code></pre>
                
                <h3>List with Sections</h3>
                <pre><code>
List {
    Section("Favorites") {
        ForEach(favoriteContacts) { contact in
            ContactRow(contact: contact)
        }
    }
    
    Section("All Contacts") {
        ForEach(allContacts) { contact in
            ContactRow(contact: contact)
        }
    }
}
.listStyle(InsetGroupedListStyle())
                </code></pre>
                
                <h3>Swipe Actions</h3>
                <pre><code>
List {
    ForEach(emails) { email in
        EmailRow(email: email)
            .swipeActions(edge: .trailing) {
                Button("Delete") {
                    deleteEmail(email)
                }
                .tint(.red)
                
                Button("Archive") {
                    archiveEmail(email)
                }
                .tint(.blue)
            }
            .swipeActions(edge: .leading) {
                Button("Mark as Read") {
                    markAsRead(email)
                }
                .tint(.green)
            }
    }
}
                </code></pre>
                
                <h3>Pull to Refresh</h3>
                <pre><code>
List(articles) { article in
    ArticleRow(article: article)
}
.refreshable {
    await loadLatestArticles()
}
                </code></pre>
                
                <h3>Search in Lists</h3>
                <pre><code>
@State private var searchText = ""

var filteredContacts: [Contact] {
    if searchText.isEmpty {
        return contacts
    } else {
        return contacts.filter { $0.name.contains(searchText) }
    }
}

NavigationView {
    List(filteredContacts) { contact in
        ContactRow(contact: contact)
    }
    .searchable(text: $searchText, prompt: "Search contacts")
    .navigationTitle("Contacts")
}
                </code></pre>
                
                <h3>Navigation Stack (iOS 16+)</h3>
                <pre><code>
NavigationStack {
    List(categories) { category in
        NavigationLink(category.name, value: category)
    }
    .navigationDestination(for: Category.self) { category in
        CategoryDetailView(category: category)
    }
    .navigationTitle("Categories")
}
                </code></pre>
                
                <div class="example-box">
                  <h4>List Performance Tips</h4>
                  <ul>
                    <li>Use <code>Identifiable</code> protocol for model objects</li>
                    <li>Implement lazy loading for large datasets</li>
                    <li>Use <code>@State</code> for local list data</li>
                    <li>Consider <code>LazyVStack</code> for custom scrolling behavior</li>
                    <li>Add placeholder states for empty lists</li>
                  </ul>
                </div>
                
                <h3>Empty State</h3>
                <pre><code>
if contacts.isEmpty {
    VStack(spacing: 20) {
        Image(systemName: "person.3")
            .font(.system(size: 50))
            .foregroundColor(.gray)
        
        Text("No Contacts")
            .font(.title2)
            .fontWeight(.semibold)
        
        Text("Add your first contact to get started")
            .foregroundColor(.gray)
            .multilineTextAlignment(.center)
        
        Button("Add Contact") {
            showingAddContact = true
        }
        .buttonStyle(.borderedProminent)
    }
    .padding()
} else {
    List(contacts) { contact in
        ContactRow(contact: contact)
    }
}
                </code></pre>
              `,
              practice: [
                {
                  id: 1,
                  question: "What protocol should your data model conform to for use in List?",
                  options: [
                    "Hashable",
                    "Identifiable",
                    "Codable",
                    "Equatable"
                  ],
                  correct: 1,
                  explanation: "Identifiable protocol ensures each item has a unique identifier, which SwiftUI uses for efficient list updates and animations."
                },
                {
                  id: 2,
                  question: "How do you add swipe-to-delete functionality?",
                  options: [
                    ".onDelete(perform: deleteItems)",
                    ".swipeActions { Button(\"Delete\") {...} }",
                    ".deleteAction(deleteItems)",
                    "Both A and B work"
                  ],
                  correct: 3,
                  explanation: "Both .onDelete(perform:) and .swipeActions work. .onDelete is simpler for basic delete functionality, while .swipeActions offers more customization."
                },
                {
                  id: 3,
                  question: "What's the modern replacement for NavigationView in iOS 16+?",
                  options: [
                    "NavigationController",
                    "NavigationStack",
                    "NavigationContainer",
                    "NavigationFrame"
                  ],
                  correct: 1,
                  explanation: "NavigationStack is the modern replacement for NavigationView, offering better performance and more flexible navigation patterns."
                }
              ]
            }
          },
          {
            id: 'state-management',
            title: 'State Management',
            description: 'Master @State, @Binding, @ObservableObject and data flow.',
            completed: false,
            content: {
              theory: `
                <h2>State Management in SwiftUI</h2>
                <p>State management is the heart of SwiftUI. Understanding how data flows through your app is crucial for building reactive, efficient interfaces.</p>
                
                <h3>@State - Local State</h3>
                <p>@State is for simple, local state within a single view:</p>
                
                <pre><code>
struct CounterView: View {
    @State private var count = 0
    
    var body: some View {
        VStack {
            Text("Count: \\(count)")
                .font(.largeTitle)
            
            HStack {
                Button("-") {
                    count -= 1
                }
                .font(.title)
                .padding()
                
                Button("+") {
                    count += 1
                }
                .font(.title)
                .padding()
            }
        }
    }
}
                </code></pre>
                
                <h3>@Binding - Two-Way Data Flow</h3>
                <p>@Binding creates a two-way connection to a value owned by another view:</p>
                
                <pre><code>
struct ToggleView: View {
    @Binding var isOn: Bool
    
    var body: some View {
        Toggle("Setting", isOn: $isOn)
    }
}

struct ParentView: View {
    @State private var settingEnabled = false
    
    var body: some View {
        VStack {
            Text("Setting is \\(settingEnabled ? "ON" : "OFF")")
            ToggleView(isOn: $settingEnabled)
        }
    }
}
                </code></pre>
                
                <h3>@ObservableObject - Shared State</h3>
                <p>For complex state that needs to be shared across multiple views:</p>
                
                <pre><code>
class UserSettings: ObservableObject {
    @Published var username = ""
    @Published var isDarkMode = false
    @Published var notifications = true
    
    func save() {
        // Save to UserDefaults or other persistence
        UserDefaults.standard.set(username, forKey: "username")
        UserDefaults.standard.set(isDarkMode, forKey: "isDarkMode")
        UserDefaults.standard.set(notifications, forKey: "notifications")
    }
}

struct SettingsView: View {
    @ObservedObject var settings: UserSettings
    
    var body: some View {
        Form {
            Section("Profile") {
                TextField("Username", text: $settings.username)
            }
            
            Section("Preferences") {
                Toggle("Dark Mode", isOn: $settings.isDarkMode)
                Toggle("Notifications", isOn: $settings.notifications)
            }
            
            Button("Save") {
                settings.save()
            }
        }
    }
}
                </code></pre>
                
                <h3>@StateObject - Ownership of ObservableObject</h3>
                <p>Use @StateObject when creating and owning an ObservableObject:</p>
                
                <pre><code>
struct ContentView: View {
    @StateObject private var settings = UserSettings()
    
    var body: some View {
        TabView {
            HomeView()
                .environmentObject(settings)
                .tabItem {
                    Image(systemName: "house")
                    Text("Home")
                }
            
            SettingsView(settings: settings)
                .tabItem {
                    Image(systemName: "gear")
                    Text("Settings")
                }
        }
    }
}
                </code></pre>
                
                <h3>@EnvironmentObject - Global State</h3>
                <p>Share objects throughout the app without passing them explicitly:</p>
                
                <pre><code>
struct HomeView: View {
    @EnvironmentObject var settings: UserSettings
    
    var body: some View {
        VStack {
            Text("Welcome, \\(settings.username)!")
            
            if settings.isDarkMode {
                Text("Dark mode is enabled")
                    .foregroundColor(.white)
            }
        }
        .background(settings.isDarkMode ? Color.black : Color.white)
    }
}
                </code></pre>
                
                <h3>Complex State Example - Todo App</h3>
                <pre><code>
struct Todo: Identifiable, Codable {
    let id = UUID()
    var title: String
    var isCompleted: Bool = false
    var createdAt = Date()
}

class TodoStore: ObservableObject {
    @Published var todos: [Todo] = []
    
    func addTodo(_ title: String) {
        let todo = Todo(title: title)
        todos.append(todo)
        saveTodos()
    }
    
    func toggleTodo(_ todo: Todo) {
        if let index = todos.firstIndex(where: { $0.id == todo.id }) {
            todos[index].isCompleted.toggle()
            saveTodos()
        }
    }
    
    func deleteTodo(_ todo: Todo) {
        todos.removeAll { $0.id == todo.id }
        saveTodos()
    }
    
    private func saveTodos() {
        if let data = try? JSONEncoder().encode(todos) {
            UserDefaults.standard.set(data, forKey: "todos")
        }
    }
    
    private func loadTodos() {
        if let data = UserDefaults.standard.data(forKey: "todos"),
           let todos = try? JSONDecoder().decode([Todo].self, from: data) {
            self.todos = todos
        }
    }
    
    init() {
        loadTodos()
    }
}

struct TodoListView: View {
    @StateObject private var todoStore = TodoStore()
    @State private var newTodoTitle = ""
    
    var body: some View {
        NavigationView {
            VStack {
                HStack {
                    TextField("New todo", text: $newTodoTitle)
                    Button("Add") {
                        if !newTodoTitle.isEmpty {
                            todoStore.addTodo(newTodoTitle)
                            newTodoTitle = ""
                        }
                    }
                }
                .padding()
                
                List {
                    ForEach(todoStore.todos) { todo in
                        TodoRowView(todo: todo, store: todoStore)
                    }
                }
            }
            .navigationTitle("Todos")
        }
    }
}
                </code></pre>
                
                <div class="example-box">
                  <h4>State Management Best Practices</h4>
                  <ul>
                    <li>Use @State for simple, local values</li>
                    <li>Use @Binding to share state between parent and child</li>
                    <li>Use @StateObject when you create the object</li>
                    <li>Use @ObservedObject when the object is passed in</li>
                    <li>Use @EnvironmentObject for app-wide state</li>
                    <li>Keep state as close to where it's used as possible</li>
                  </ul>
                </div>
                
                <h3>@AppStorage - UserDefaults Integration</h3>
                <pre><code>
struct SettingsView: View {
    @AppStorage("username") private var username = ""
    @AppStorage("isDarkMode") private var isDarkMode = false
    @AppStorage("fontSize") private var fontSize = 16.0
    
    var body: some View {
        Form {
            TextField("Username", text: $username)
            Toggle("Dark Mode", isOn: $isDarkMode)
            Slider(value: $fontSize, in: 12...24) {
                Text("Font Size: \\(Int(fontSize))")
            }
        }
    }
}
                </code></pre>
              `,
              practice: [
                {
                  id: 1,
                  question: "When should you use @StateObject vs @ObservedObject?",
                  options: [
                    "They're the same, use either one",
                    "@StateObject when you create the object, @ObservedObject when it's passed in",
                    "@StateObject for complex objects, @ObservedObject for simple ones",
                    "@StateObject is deprecated, always use @ObservedObject"
                  ],
                  correct: 1,
                  explanation: "Use @StateObject when your view creates and owns the object. Use @ObservedObject when the object is passed in from a parent view."
                },
                {
                  id: 2,
                  question: "What does the $ prefix do when used with @State?",
                  options: [
                    "It makes the variable private",
                    "It creates a Binding to the state variable",
                    "It unwraps an optional value",
                    "It creates a computed property"
                  ],
                  correct: 1,
                  explanation: "The $ prefix creates a Binding to the state variable, allowing two-way data flow between views."
                },
                {
                  id: 3,
                  question: "Which property wrapper automatically saves to UserDefaults?",
                  options: [
                    "@UserDefault",
                    "@Storage",
                    "@AppStorage",
                    "@Persistent"
                  ],
                  correct: 2,
                  explanation: "@AppStorage automatically reads from and writes to UserDefaults, making it perfect for user preferences and settings."
                }
              ]
            }
          },
          {
            id: 'animations-and-transitions',
            title: 'Animations & Transitions',
            description: 'Create smooth animations and delightful user experiences.',
            completed: false,
            content: {
              theory: `
                <h2>Animations & Transitions in SwiftUI</h2>
                <p>Animations bring your app to life and create delightful user experiences. SwiftUI makes it incredibly easy to add smooth, performant animations.</p>
                
                <h3>Basic Implicit Animations</h3>
                <p>Add animation to any property change with .animation():</p>
                
                <pre><code>
struct AnimatedButton: View {
    @State private var isPressed = false
    
    var body: some View {
        Button("Press Me") {
            isPressed.toggle()
        }
        .scaleEffect(isPressed ? 1.2 : 1.0)
        .animation(.easeInOut(duration: 0.3), value: isPressed)
    }
}
                </code></pre>
                
                <h3>Explicit Animations with withAnimation</h3>
                <p>Control exactly when animations occur:</p>
                
                <pre><code>
struct ExpandableCard: View {
    @State private var isExpanded = false
    
    var body: some View {
        VStack {
            HStack {
                Text("Card Title")
                    .font(.headline)
                Spacer()
                Button(action: {
                    withAnimation(.spring()) {
                        isExpanded.toggle()
                    }
                }) {
                    Image(systemName: "chevron.down")
                        .rotationEffect(.degrees(isExpanded ? 180 : 0))
                }
            }
            
            if isExpanded {
                Text("This is the expanded content that appears with a smooth animation.")
                    .padding(.top)
                    .transition(.opacity.combined(with: .slide))
            }
        }
        .padding()
        .background(Color.gray.opacity(0.1))
        .cornerRadius(12)
    }
}
                </code></pre>
                
                <h3>Animation Curves</h3>
                <p>Different timing curves create different feels:</p>
                
                <pre><code>
struct AnimationCurvesDemo: View {
    @State private var animate = false
    
    var body: some View {
        VStack(spacing: 20) {
            // Linear
            Circle()
                .fill(Color.red)
                .frame(width: 50, height: 50)
                .offset(x: animate ? 150 : -150)
                .animation(.linear(duration: 2), value: animate)
            
            // Ease In Out
            Circle()
                .fill(Color.blue)
                .frame(width: 50, height: 50)
                .offset(x: animate ? 150 : -150)
                .animation(.easeInOut(duration: 2), value: animate)
            
            // Spring
            Circle()
                .fill(Color.green)
                .frame(width: 50, height: 50)
                .offset(x: animate ? 150 : -150)
                .animation(.spring(response: 0.6, dampingFraction: 0.8), value: animate)
            
            Button("Animate") {
                animate.toggle()
            }
        }
    }
}
                </code></pre>
                
                <h3>Custom Spring Animations</h3>
                <pre><code>
// Bouncy spring
.animation(.spring(response: 0.5, dampingFraction: 0.6, blendDuration: 0))

// Smooth spring
.animation(.spring(response: 0.8, dampingFraction: 1.0, blendDuration: 0))

// Quick spring
.animation(.spring(response: 0.3, dampingFraction: 0.9, blendDuration: 0))
                </code></pre>
                
                <h3>View Transitions</h3>
                <p>Animate views appearing and disappearing:</p>
                
                <pre><code>
struct TransitionDemo: View {
    @State private var showDetails = false
    
    var body: some View {
        VStack {
            Button("Toggle Details") {
                withAnimation(.easeInOut(duration: 0.5)) {
                    showDetails.toggle()
                }
            }
            
            if showDetails {
                VStack(spacing: 10) {
                    Text("Detail 1")
                    Text("Detail 2")
                    Text("Detail 3")
                }
                .transition(.asymmetric(
                    insertion: .scale.combined(with: .opacity),
                    removal: .opacity
                ))
            }
        }
    }
}
                </code></pre>
                
                <h3>Complex Transition Examples</h3>
                <pre><code>
// Slide from specific edge
.transition(.slide)

// Scale with opacity
.transition(.scale.combined(with: .opacity))

// Custom offset transition
.transition(.offset(x: 300, y: 0))

// Move and fade
.transition(.move(edge: .trailing).combined(with: .opacity))

// Asymmetric transitions
.transition(.asymmetric(
    insertion: .scale(scale: 0.5).combined(with: .opacity),
    removal: .scale(scale: 1.2).combined(with: .opacity)
))
                </code></pre>
                
                <h3>Animated Shapes and Paths</h3>
                <pre><code>
struct AnimatedProgress: View {
    @State private var progress: Double = 0
    
    var body: some View {
        VStack {
            Circle()
                .trim(from: 0, to: progress)
                .stroke(Color.blue, lineWidth: 8)
                .frame(width: 100, height: 100)
                .rotationEffect(.degrees(-90))
                .animation(.easeInOut(duration: 1), value: progress)
            
            Button("Animate Progress") {
                progress = progress == 0 ? 1 : 0
            }
        }
    }
}
                </code></pre>
                
                <h3>Matched Geometry Effect</h3>
                <p>Create seamless transitions between views:</p>
                
                <pre><code>
struct HeroAnimation: View {
    @State private var isExpanded = false
    @Namespace private var heroImage
    
    var body: some View {
        if isExpanded {
            VStack {
                Image("hero-image")
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .matchedGeometryEffect(id: "hero", in: heroImage)
                    .frame(height: 300)
                
                Text("Expanded View")
                    .padding()
                
                Button("Collapse") {
                    withAnimation(.spring()) {
                        isExpanded = false
                    }
                }
            }
        } else {
            HStack {
                Image("hero-image")
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .matchedGeometryEffect(id: "hero", in: heroImage)
                    .frame(width: 60, height: 60)
                    .cornerRadius(8)
                
                VStack(alignment: .leading) {
                    Text("Card Title")
                    Text("Subtitle")
                        .foregroundColor(.gray)
                }
                
                Spacer()
            }
            .padding()
            .onTapGesture {
                withAnimation(.spring()) {
                    isExpanded = true
                }
            }
        }
    }
}
                </code></pre>
                
                <h3>Animation Timing and Delays</h3>
                <pre><code>
struct StaggeredAnimation: View {
    @State private var animate = false
    
    var body: some View {
        VStack {
            ForEach(0..<5) { index in
                RoundedRectangle(cornerRadius: 8)
                    .fill(Color.blue)
                    .frame(width: 200, height: 40)
                    .offset(x: animate ? 0 : -300)
                    .animation(
                        .easeOut(duration: 0.5)
                        .delay(Double(index) * 0.1),
                        value: animate
                    )
            }
            
            Button("Animate") {
                animate.toggle()
            }
        }
    }
}
                </code></pre>
                
                <div class="example-box">
                  <h4>Animation Best Practices</h4>
                  <ul>
                    <li>Use spring animations for natural feel</li>
                    <li>Keep animations short (0.2-0.8 seconds)</li>
                    <li>Use appropriate easing curves</li>
                    <li>Avoid animating too many properties at once</li>
                    <li>Test on device for performance</li>
                    <li>Consider accessibility settings</li>
                  </ul>
                </div>
                
                <h3>Interactive Animations</h3>
                <pre><code>
struct DraggableCard: View {
    @State private var dragOffset = CGSize.zero
    @State private var isDragging = false
    
    var body: some View {
        RoundedRectangle(cornerRadius: 16)
            .fill(Color.blue)
            .frame(width: 200, height: 300)
            .offset(dragOffset)
            .scaleEffect(isDragging ? 1.05 : 1.0)
            .rotationEffect(.degrees(Double(dragOffset.width / 10)))
            .gesture(
                DragGesture()
                    .onChanged { value in
                        dragOffset = value.translation
                        if !isDragging {
                            withAnimation(.spring(response: 0.3)) {
                                isDragging = true
                            }
                        }
                    }
                    .onEnded { _ in
                        withAnimation(.spring()) {
                            dragOffset = .zero
                            isDragging = false
                        }
                    }
            )
    }
}
                </code></pre>
              `,
              practice: [
                {
                  id: 1,
                  question: "What's the difference between implicit and explicit animations?",
                  options: [
                    "Implicit animations are automatic, explicit animations are manual",
                    "Implicit use .animation(), explicit use withAnimation()",
                    "Implicit are faster, explicit are smoother",
                    "There's no difference"
                  ],
                  correct: 1,
                  explanation: "Implicit animations use .animation() modifier and animate automatically when values change. Explicit animations use withAnimation() to control exactly when animation occurs."
                },
                {
                  id: 2,
                  question: "Which animation type feels most natural for UI interactions?",
                  options: [
                    ".linear",
                    ".easeIn",
                    ".spring()",
                    ".easeOut"
                  ],
                  correct: 2,
                  explanation: "Spring animations feel most natural because they mimic real-world physics with momentum and bounce, creating more organic movement."
                },
                {
                  id: 3,
                  question: "What does matchedGeometryEffect enable?",
                  options: [
                    "Smooth transitions between different views",
                    "Automatic layout adjustments",
                    "Performance optimization",
                    "Gesture recognition"
                  ],
                  correct: 0,
                  explanation: "matchedGeometryEffect creates seamless transitions between views by maintaining visual continuity of shared elements during navigation or state changes."
                }
              ]
            }
          }
        ]
      }
    ]
  }
};

export const getAllCourses = () => {
  return Object.values(coursesData);
};

export const getCourse = (courseId) => {
  return coursesData[courseId];
};

export const getLesson = (courseId, lessonId) => {
  const course = getCourse(courseId);
  if (!course) return null;
  
  for (const chapter of course.chapters) {
    const lesson = chapter.lessons.find(l => l.id === lessonId);
    if (lesson) return lesson;
  }
  return null;
};