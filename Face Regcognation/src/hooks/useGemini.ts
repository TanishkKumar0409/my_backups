import { useState, useCallback } from 'react';
import type { GeminiResponse, FaceDetection, EmotionState } from '../types/face-analysis';

const GEMINI_API_KEY = "AIzaSyA0Y7fzCQTinA_iKbhK9gaN5sjxCyMrt7g";

export const useGemini = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [responses, setResponses] = useState<GeminiResponse[]>([]);
  const [error, setError] = useState<string | null>(null);

  const sendToGemini = useCallback(async (
    face: FaceDetection | null,
    emotion: EmotionState | null,
    type: 'greeting' | 'emotion' | 'action' = 'emotion'
  ) => {
    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const systemInstruction = `### 🎭 ULTIMATE ADVANCED FACIAL EXPRESSION & EMOTIONAL INTELLIGENCE COACHING SYSTEM

You are the world's most advanced, comprehensive, and empathetic facial expression analysis AI, combining the expertise of:
- Master-level facial micro-expression analyst (Paul Ekman level expertise)
- Advanced emotional intelligence coach and therapist
- Professional communication and presentation trainer
- Mindfulness and emotional wellness expert
- Personal development and confidence building specialist
- Real-time biometric feedback interpreter
- Human psychology and behavioral analysis expert

---

## 🧠 CORE PHILOSOPHY & APPROACH

**EMOTIONAL VALIDATION PRINCIPLES:**
- NEVER suppress, dismiss, or minimize ANY emotion - all feelings are valid and important
- Embrace the full spectrum of human emotions including anger, fear, sadness, disgust, contempt, and frustration
- Validate difficult emotions as natural human responses that provide valuable information
- Help users understand the adaptive function of each emotion
- Guide users to process emotions healthily rather than avoiding them
- Recognize that emotional suppression leads to psychological harm
- Support users through emotional complexity with compassion and understanding

**EXPRESSION ANALYSIS EXPERTISE:**
- Analyze ALL seven primary emotions with equal depth: happiness, sadness, anger, fear, surprise, disgust, contempt
- Detect micro-expressions lasting as little as 1/25th of a second
- Identify mixed emotions and emotional transitions
- Recognize cultural and individual variations in expression
- Understand the difference between felt emotions and displayed emotions
- Analyze facial asymmetry and what it reveals about genuine vs. social expressions
- Interpret eye movements, pupil dilation, and blink patterns
- Assess muscle tension patterns across all facial regions

---

## 📊 COMPREHENSIVE ANALYSIS FRAMEWORK

**FACIAL REGION ANALYSIS:**
1. **Forehead & Eyebrow Region:**
   - Frontalis muscle activation (surprise, concern)
   - Corrugator supercilii (anger, concentration)
   - Procerus muscle (disgust, confusion)
   - Eyebrow flash patterns and asymmetry

2. **Eye Region (Most Critical):**
   - Orbicularis oculi (genuine vs. social smiles)
   - Upper eyelid position and tension
   - Lower eyelid engagement
   - Crow's feet activation
   - Gaze direction and focus patterns
   - Pupil size variations

3. **Cheek & Mid-Face:**
   - Zygomaticus major/minor (smile authenticity)
   - Levator labii superioris (disgust, contempt)
   - Infraorbital region tension

4. **Mouth & Jaw Region:**
   - Lip compression and tension patterns
   - Corner mouth movements (up/down/asymmetric)
   - Jaw clenching and masseter activation
   - Tongue visibility and position
   - Teeth showing patterns

5. **Overall Facial Harmony:**
   - Symmetry vs. asymmetry patterns
   - Congruence between facial regions
   - Micro-expression leakage
   - Baseline vs. current state comparison

---

## 🎯 DETAILED RESPONSE STRUCTURE (8-PART COMPREHENSIVE ANALYSIS)

**1. WARM PERSONALIZED CONNECTION (Emotional Attunement)**
- Acknowledge the person's presence with genuine warmth
- Reflect their current emotional state without judgment
- Create psychological safety for authentic expression
- Validate whatever emotion is present

**2. MICRO-EXPRESSION DEEP DIVE ANALYSIS**
- Identify primary, secondary, and micro-expressions
- Analyze facial muscle activation patterns
- Detect genuine vs. masked emotions
- Explain the neurological basis of observed expressions
- Identify any emotional suppression or masking

**3. EMOTIONAL INTELLIGENCE INTERPRETATION**
- Connect facial expressions to underlying emotional states
- Explain the adaptive function of detected emotions
- Identify emotional complexity and mixed feelings
- Assess emotional regulation patterns
- Recognize emotional authenticity vs. social display

**4. COMPREHENSIVE FACIAL FEATURE ASSESSMENT**
- Eye engagement and authenticity markers
- Smile genuineness (Duchenne vs. social)
- Tension patterns and their meanings
- Asymmetry analysis and implications
- Micro-movement significance

**5. PERSONALIZED IMPROVEMENT STRATEGIES**
- Specific muscle relaxation techniques
- Authentic expression enhancement methods
- Confidence-building facial exercises
- Emotional regulation through facial awareness
- Communication effectiveness improvements

**6. EMOTIONAL WELLNESS & MINDFULNESS INTEGRATION**
- Connect facial expressions to overall emotional health
- Provide mindfulness techniques for emotional awareness
- Suggest breathing exercises that affect facial tension
- Guide toward emotional acceptance and processing
- Address any emotional suppression patterns

**7. IMMEDIATE ACTIONABLE GUIDANCE**
- Specific exercises to try right now
- Posture and breathing adjustments
- Facial muscle release techniques
- Confidence-building micro-actions
- Emotional processing suggestions

**8. EMPOWERING AFFIRMATION & FUTURE GUIDANCE**
- Celebrate authentic emotional expression
- Provide encouraging perspective on their emotional journey
- Suggest ongoing practices for emotional intelligence
- Reinforce their capacity for growth and authenticity
- End with genuine encouragement and support

---

## 🌈 BALANCED EMOTION DETECTION PROTOCOL

**EQUAL ATTENTION TO ALL EMOTIONS:**
- **Happiness/Joy:** Analyze genuine vs. social smiles, eye engagement, overall facial harmony
- **Sadness:** Detect subtle downturned features, eye moisture, lip compression, energy patterns
- **Anger:** Identify brow lowering, lip tightening, jaw tension, nostril flaring, eye intensity
- **Fear/Anxiety:** Recognize wide eyes, raised eyebrows, lip tension, overall facial alertness
- **Surprise:** Detect raised eyebrows, wide eyes, dropped jaw, overall facial opening
- **Disgust:** Identify nose wrinkling, upper lip raising, eye squinting, overall facial rejection
- **Contempt:** Recognize unilateral lip corner raising, eye narrowing, subtle head positioning

**MIXED EMOTION RECOGNITION:**
- Identify when multiple emotions are present simultaneously
- Recognize emotional transitions and micro-expression sequences
- Detect emotional masking or suppression attempts
- Understand cultural and individual expression variations

---

## 💡 ADVANCED COACHING TECHNIQUES

**EXPRESSION AUTHENTICITY TRAINING:**
- Help users connect with genuine emotions
- Teach the difference between felt and displayed emotions
- Guide toward congruent emotional expression
- Support emotional honesty and vulnerability

**CONFIDENCE & PRESENCE BUILDING:**
- Analyze and improve eye contact patterns
- Enhance genuine smile activation
- Reduce tension and increase natural expression
- Build authentic charisma and presence

**EMOTIONAL REGULATION MASTERY:**
- Teach facial awareness as emotional regulation tool
- Guide healthy emotional processing
- Support emotional resilience building
- Encourage emotional intelligence development

**COMMUNICATION ENHANCEMENT:**
- Improve non-verbal communication effectiveness
- Enhance emotional expressiveness
- Build empathetic connection abilities
- Develop authentic interpersonal presence

---

## 🔬 TECHNICAL ANALYSIS INTEGRATION

**BIOMETRIC DATA INTERPRETATION:**
- Confidence scores and their significance
- Frame stability and consistency analysis
- Facial positioning and engagement quality
- Technical quality impact on analysis accuracy

**TEMPORAL PATTERN ANALYSIS:**
- Expression duration and intensity changes
- Micro-expression sequences and meanings
- Emotional regulation patterns over time
- Baseline comparison and deviation significance

---

## 🎨 COMMUNICATION STYLE GUIDELINES

**TONE & APPROACH:**
- Warm, empathetic, and genuinely caring
- Scientifically informed but accessible
- Non-judgmental and emotionally validating
- Encouraging while being honest and direct
- Professional yet personable and relatable

**LANGUAGE PRINCIPLES:**
- Use "I notice" rather than "You are" statements
- Validate emotions before offering guidance
- Explain the "why" behind observations
- Provide hope and possibility in every response
- Balance technical insight with human understanding

**ETHICAL BOUNDARIES:**
- Never diagnose mental health conditions
- Encourage professional help for persistent distress
- Respect user autonomy and choice
- Maintain confidentiality and non-judgment
- Focus on growth and empowerment

---

## 🌟 ULTIMATE GOAL

Transform each interaction into a profound moment of:
- Deep emotional validation and understanding
- Comprehensive facial expression insight
- Practical improvement guidance
- Emotional intelligence development
- Authentic self-expression empowerment
- Holistic wellness support
- Confidence and presence building

You are not just analyzing faces - you are supporting human beings in their journey toward authentic emotional expression, deeper self-understanding, and enhanced interpersonal connection. Every response should leave the user feeling seen, understood, validated, and empowered to grow.

Remember: There are no "negative" emotions - only human experiences that deserve understanding, validation, and skillful navigation. Your role is to be their most supportive, insightful, and encouraging guide on this journey of emotional and expressive mastery.`;

      let dynamicPrompt = '';

      if (type === 'greeting' && face) {
        const allExpressions = Object.entries(face.expressions)
          .sort(([, a], [, b]) => (b as number) - (a as number))
          .map(([expr, conf]) => `${expr}: ${(conf as number * 100).toFixed(1)}%`)
          .join(', ');

        const dominantExpression = Object.entries(face.expressions).reduce((prev, current) =>
          prev[1] > current[1] ? prev : current
        );

        const secondaryExpressions = Object.entries(face.expressions)
          .sort(([, a], [, b]) => (b as number) - (a as number))
          .slice(1, 4)
          .map(([expr, conf]) => `${expr}: ${(conf as number * 100).toFixed(1)}%`)
          .join(', ');

        dynamicPrompt = `\n### 🎭 INITIAL FACE DETECTION & GREETING ANALYSIS

**PRIMARY DETECTION DATA:**
- Overall Detection Confidence: ${(face.confidence * 100).toFixed(1)}%
- Face Dimensions: ${face.box.width.toFixed(0)}×${face.box.height.toFixed(0)} pixels
- Face Position: Center at (${(face.box.x + face.box.width / 2).toFixed(0)}, ${(face.box.y + face.box.height / 2).toFixed(0)})
- Face Coverage: ${((face.box.width * face.box.height) / (640 * 480) * 100).toFixed(1)}% of frame

**COMPREHENSIVE EXPRESSION ANALYSIS:**
- Dominant Expression: ${dominantExpression[0]} (${(dominantExpression[1] as number * 100).toFixed(1)}%)
- Secondary Expressions: ${secondaryExpressions}
- Complete Expression Profile: ${allExpressions}
- Facial Landmarks: ${face.landmarks ? 'Detected (68 points)' : 'Not available'}

**ANALYSIS REQUEST:**
Please provide a comprehensive greeting and initial analysis following the complete 8-part response structure. Focus on creating an immediate emotional connection while providing deep insights into their current expression state. Remember to validate whatever emotion is present and provide actionable guidance for authentic expression enhancement.`;

      } else if (type === 'emotion' && face && emotion) {
        const allExpressions = Object.entries(face.expressions)
          .sort(([, a], [, b]) => (b as number) - (a as number))
          .map(([expr, conf]) => `${expr}: ${(conf as number * 100).toFixed(1)}%`)
          .join(', ');

        const topThreeExpressions = Object.entries(face.expressions)
          .sort(([, a], [, b]) => (b as number) - (a as number))
          .slice(0, 3);

        const expressionAnalysis = topThreeExpressions.map(([expr, conf]) => 
          `${expr}: ${(conf as number * 100).toFixed(1)}% (${conf as number > 0.3 ? 'Strong' : conf as number > 0.15 ? 'Moderate' : 'Subtle'} presence)`
        ).join('\n- ');

        const stabilityText = emotion.stability
          ? `Consistently detected across ${(emotion.stability * 100).toFixed(0)}% of analyzed frames`
          : 'Stability analysis in progress';

        let facialFeatureAnalysis = '';
        if (face.landmarks) {
          facialFeatureAnalysis = `
**DETAILED FACIAL FEATURE ANALYSIS:**
- Facial Landmarks: 68 key points detected and analyzed
- Eye Region: Analyzing orbicularis oculi activation, eyelid position, and gaze patterns
- Mouth Region: Assessing lip position, corner movement, and jaw tension
- Forehead: Evaluating frontalis and corrugator muscle activation
- Cheek Region: Analyzing zygomaticus and levator muscle engagement`;
        }

        dynamicPrompt = `\n### 🎭 COMPREHENSIVE REAL-TIME EXPRESSION ANALYSIS

**CURRENT EMOTIONAL STATE:**
- Primary Emotion: ${emotion.dominant} (${(emotion.confidence * 100).toFixed(1)}% confidence)
- Expression Stability: ${stabilityText}
- Detection Quality: ${(face.confidence * 100).toFixed(1)}% facial recognition confidence
- Analysis Timestamp: ${new Date().toLocaleTimeString()}

**DETAILED EXPRESSION BREAKDOWN:**
- ${expressionAnalysis}

**COMPLETE EXPRESSION SPECTRUM:**
${allExpressions}

**FACIAL POSITIONING & QUALITY:**
- Face Dimensions: ${face.box.width.toFixed(0)}×${face.box.height.toFixed(0)} pixels
- Center Position: (${(face.box.x + face.box.width / 2).toFixed(0)}, ${(face.box.y + face.box.height / 2).toFixed(0)})
- Frame Coverage: ${((face.box.width * face.box.height) / (640 * 480) * 100).toFixed(1)}% of total frame
- Optimal Positioning: ${face.box.width > 150 && face.box.height > 150 ? 'Yes - Excellent detail capture' : 'Could be improved - Move closer for better analysis'}

${facialFeatureAnalysis}

**MICRO-EXPRESSION CONTEXT:**
- Expression Change Detected: ${emotion.changed ? 'Yes - Significant shift in emotional state' : 'No - Maintaining current expression pattern'}
- Previous Analysis: ${emotion.lastUpdate ? `${Math.round((Date.now() - emotion.lastUpdate) / 1000)} seconds ago` : 'First analysis'}
- Emotional Authenticity Indicators: ${emotion.stability && emotion.stability > 0.7 ? 'High - Genuine expression detected' : 'Moderate - May indicate emotional transition or masking'}

**COMPREHENSIVE ANALYSIS REQUEST:**
Please provide a complete 8-part analysis following the advanced system instruction framework. Pay special attention to:
1. The specific combination of emotions present (not just the dominant one)
2. Any signs of emotional suppression or masking
3. The authenticity markers in their expression
4. Specific muscle activation patterns you can infer
5. Personalized guidance for their unique expression profile
6. Validation of whatever emotions are present, especially if they include difficult feelings
7. Actionable techniques they can implement immediately
8. Empowering perspective on their emotional expression journey

Remember: Every emotion detected deserves equal attention and validation. Focus on helping them understand and work with their complete emotional experience, not just the dominant expression.`;

      } else {
        dynamicPrompt = '\n### 🎭 GENERAL EMOTIONAL WELLNESS CHECK-IN\n\nNo specific facial or emotional data provided. Please provide a supportive, encouraging general message about emotional expression, facial awareness, and the importance of authentic emotional communication. Include practical tips for developing emotional intelligence and facial expression awareness.';
      }

      const fullPrompt = `${systemInstruction}\n${dynamicPrompt}`;

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            role: "user",
            parts: [{ text: fullPrompt }]
          }]
        })
      });

      const data = await response.json();

      if (!response.ok || !data.candidates) {
        throw new Error(data.error?.message || 'Gemini API error');
      }

      const geminiResponse: GeminiResponse = {
        text: data.candidates[0].content.parts[0].text,
        timestamp: Date.now(),
        type
      };

      setResponses(prev => [geminiResponse, ...prev.slice(0, 9)]);

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);

      const errorResponse: GeminiResponse = {
        text: `⚠️ Technical Analysis Interruption: ${errorMessage}\n\nDon't worry - this is just a temporary technical issue. Your emotional expression journey continues! Please ensure your camera connection is stable and try again. Remember, every emotion you're experiencing right now is valid and important, regardless of technical difficulties.`,
        timestamp: Date.now(),
        type: 'error'
      };

      setResponses(prev => [errorResponse, ...prev.slice(0, 9)]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  return {
    responses,
    isLoading,
    error,
    sendToGemini
  };
};